import React, { useEffect, useState } from 'react';
import mediaService from '../../service/media-service';
import fallbackImage from '../../images/diwali.webp';

const ImageListComponent = () => {
    const [imageList, setImageList] = useState([]);

    useEffect(() => {
        getImageData();
    }, []);


    const getImageData = async () => {
        // get api resposne here
        const result = await mediaService.fetchImageList();
        setImageList(result.data);
    };

    return (
        <div>
            {
                !!imageList.length &&
                <div className="row">
                    {
                        imageList.map((data, index) =>
                            <div className="col-4" key={index}>
                                <img src={data.user?.avatar_url ?? fallbackImage} alt={data.title} style={{ width: '150px', height: '150px' }} />
                                <div>{data.title}</div>
                            </div>
                        )
                    }
                </div>
            }
        </div>
    )
}

export default ImageListComponent;
