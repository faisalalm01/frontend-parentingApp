import React from 'react';

function ArticleItemBody({ describe, title }) {
    return (
        <div className='article-item__body'>
            <h3> {title} </h3>
            <p> {describe} </p>
        </div>
    );
}

export default ArticleItemBody;
