import React from 'react';

function ArticleItemImage({ urlToImage }) {
    return (
        <div className='artcile-item__image'>
            <img src={urlToImage} alt='article avatar' />
        </div>
    );
}

export default ArticleItemImage;
