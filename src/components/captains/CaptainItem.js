import React from "react";

import CaptainItemBody from '../captains/CaptainItemBody';
import CaptainItemImage from '../captains/CaptainItemImage';

function CaptainItem({ imageUrl, name, title, describe }) {
    return (
        <div>
            <CaptainItemImage image={imageUrl} />
            <CaptainItemBody name={name} title={title} describe={describe} />
        </div>
    );
}

export default CaptainItem;
