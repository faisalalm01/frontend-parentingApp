import React from 'react';

<<<<<<< HEAD
function CaptainItemImage({ image }) {
    return (
        <div className='captain-item__image'>
            <img src={image} alt='captain avatar' className='w-40 rounded-full h-40' />
=======
function CaptainItemImage({ imageUrl }) {
    return (
        <div className='captain-item__image'>
            <img src={imageUrl} alt='captain avatar' />
>>>>>>> 8452ae2647f2d4df7fdf5b2d2a360a78742897a4
        </div>
    );
}

export default CaptainItemImage;
