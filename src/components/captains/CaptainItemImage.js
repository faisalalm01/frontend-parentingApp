import React from 'react';

function CaptainItemImage({ image }) {
    return (
        <div className='captain-item__image'>
            <img src={image} alt='captain avatar' className='w-40 rounded-full h-40' />

        </div>
    );
}

export default CaptainItemImage;
