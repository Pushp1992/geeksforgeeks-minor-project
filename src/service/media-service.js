// all api call related logic for audio, video and images will go here

import axios from 'axios';

const mediaService = {
    async fetchImageList() {

        const API_KEY = "5pz3ijoel9TP8PVJPb0SDND5kdXihPyc";
        const SEARCH_TERM = "cheeseburgers"

        const BASE_URL = "https://api.giphy.com";
        const END_POINT = "v1/gifs";

        const image_public_url = `${BASE_URL}/${END_POINT}/search?api_key=${API_KEY}&q=${SEARCH_TERM}`;

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
