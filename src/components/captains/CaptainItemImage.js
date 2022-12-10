import React from 'react';

function CaptainItemImage({ imageUrl }) {
    return (
        <div className='captain-item__image'>
            <img src={imageUrl} alt='captain avatar' />
        </div>
    );
}

export default CaptainItemImage;
