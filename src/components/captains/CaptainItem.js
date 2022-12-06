import React from "react";
import CaptainItemBody from '../captains/CaptainItemBody';
import CaptainItemImage from '../captains/CaptainItemImage';

function CaptainItem({ image, name, title, describe }) {
    return (
        <div>
            <CaptainItemImage image={image} />
            <CaptainItemBody name={name} title={title} describe={describe} />
        </div>
    );
}

export default CaptainItem;
