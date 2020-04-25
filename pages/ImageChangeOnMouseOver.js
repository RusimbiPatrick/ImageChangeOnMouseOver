import React from 'react'
import ImageToggleOnMouseOver from "../src/ImageToggeleOnMoseOver";

const ImageChangeOnMouseOver = () =>{
    return (
        <div>
            <ImageToggleOnMouseOver primaryImg="/face.JPG"
                                    secondaryImg="/faceBW.JPG"
            alt=""/>
            &nbsp;&nbsp;&nbsp;
            <ImageToggleOnMouseOver primaryImg="/pose.JPG"
                                    secondaryImg="/poseBW.JPG"
            alt=""/>
        </div>
    )
}

export default ImageChangeOnMouseOver;