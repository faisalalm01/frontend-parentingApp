import React from 'react';

function CaptainItemImage({ image }) {
    return (
        <div className='captain-item__image'>
            <img src={image} alt='captain avatar' />
        </div>
    );
}

export default CaptainItemImage;
