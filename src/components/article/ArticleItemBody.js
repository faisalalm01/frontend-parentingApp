import React from 'react';

function ArticleItemBody({ describe, title }) {
    return (
        <div className='p-2 mb-20'>
            <h3 className='font-bold'> {title} </h3>
            <p className='text-ellipsis overflow-hidden'> {describe.slice(0,200)} </p>
        </div>
    );
}

export default ArticleItemBody;
