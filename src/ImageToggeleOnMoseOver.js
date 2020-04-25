import React, {useRef} from 'react';


const ImageToggeleOnMoseOver = ({primaryImg, secondaryImg}) => {
    const imageRef = useRef(null);
    return (
        <img style={{ width: 400 }}
            // Access image attributes
            ref={imageRef}
            onMouseOver={() => {
                imageRef.current.src = secondaryImg;
            }} 
            onMouseOut={() => {
                imageRef.current.src = primaryImg;
            }} 
            src={primaryImg}
            alt=""
        />
    )
}

export default ImageToggeleOnMoseOver;