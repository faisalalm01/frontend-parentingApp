import React from 'react';

function ArticleItemBody({ publishedAt, title, description, content }) {
    return (
        <div className='article-item__body'>
            <h3> {title} </h3>
            <p> {publishedAt} </p>
            <p> {description} </p>
            <p> {content} </p>
        </div>
    );
}

export default ArticleItemBody;
