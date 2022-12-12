import React from "react";

import CaptainItemBody from '../captains/CaptainItemBody';
import CaptainItemImage from '../captains/CaptainItemImage';

function CaptainItem({ image, name, title, describe }) {
    return (
        <div className="xl:w-1/4 md:w-1/2 p-4">
      <div class="h-full text-center bg-gray-100 py-8 rounded-xl shadow-lg">
            <CaptainItemImage image={image} />
            <CaptainItemBody name={name} title={title} describe={describe} />
        </div>
        </div>
    );
}

export default CaptainItem;
