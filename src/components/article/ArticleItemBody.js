import React from 'react';

<<<<<<< HEAD
function ArticleItemBody({ describe, title }) {
    return (
        <div className='p-2 mb-20'>
            <h3 className='font-bold'> {title} </h3>
            <p className='text-ellipsis overflow-hidden'> {describe.slice(0,200)} </p>
=======
function ArticleItemBody({ publishedAt, title, description, content }) {
    return (
        <div className='article-item__body'>
            <h3> {title} </h3>
            <p> {publishedAt} </p>
            <p> {description} </p>
            <p> {content} </p>
>>>>>>> 8452ae2647f2d4df7fdf5b2d2a360a78742897a4
        </div>
    );
}

export default ArticleItemBody;
