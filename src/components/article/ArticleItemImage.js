import React from 'react';

<<<<<<< HEAD
function ArticleItemImage({ image }) {
    return (
        <div className='min-w-full'>
            <img src={image} alt='article avatar' />
=======
function ArticleItemImage({ urlToImage }) {
    return (
        <div className='artcile-item__image'>
            <img src={urlToImage} alt='article avatar' />
>>>>>>> 8452ae2647f2d4df7fdf5b2d2a360a78742897a4
        </div>
    );
}

export default ArticleItemImage;
