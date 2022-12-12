import React from 'react';

function CaptainItemImage({ image }) {
    return (
        <div className=''>
            <img src={image} alt='captain avatar' className="w-40 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"/>
        </div>
    );
}

export default CaptainItemImage;
