// all api call related logic for audio, video and images will go here

import axios from 'axios';

const mediaService = {

    async fetchImageList() {
        const image_public_url = "https://api.giphy.com/v1/gifs/search?api_key=5pz3ijoel9TP8PVJPb0SDND5kdXihPyc&q=cheeseburgers";
        const imageURL = window.encodeURI(image_public_url);

        return await axios({
            method: "GET",
            url: imageURL,
            "headers": {
                "Content-Type": "aplication/json"
            }
        }).then(res => {
            return res.data;
        }).catch(err => {
            return err;
        })
    },


    fetchVideoList() {
        // to-do in future if we get api for videos
    }
};

export default mediaService;
