import React from "react";

export default function Img(props) {
    const { img} = props;
    return (
        <div className='img-Container'>
            <img src={img} alt='Nasa picture of the day' ></img>
        </div>
    )
}