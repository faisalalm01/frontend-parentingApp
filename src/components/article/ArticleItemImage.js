import React from 'react';

function ArticleItemImage({ image }) {
    return (
        <div className='min-w-full'>
            <img src={image} alt='article avatar' />
        </div>
    );
}

export default ArticleItemImage;
