import React from 'react';

function ArticleItemImage({ image }) {
    return (
        <div className='artcile-item__image'>
            <img src={image} alt='article avatar' />
        </div>
    );
}

export default ArticleItemImage;
