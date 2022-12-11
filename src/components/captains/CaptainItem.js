import React from "react";

import CaptainItemBody from '../captains/CaptainItemBody';
import CaptainItemImage from '../captains/CaptainItemImage';

<<<<<<< HEAD
function CaptainItem({ image, name, title, describe }) {
    return (
        <div>
            <CaptainItemImage image={image} />
=======
function CaptainItem({ imageUrl, name, title, describe }) {
    return (
        <div>
            <CaptainItemImage image={imageUrl} />
>>>>>>> 8452ae2647f2d4df7fdf5b2d2a360a78742897a4
            <CaptainItemBody name={name} title={title} describe={describe} />
        </div>
    );
}

export default CaptainItem;
