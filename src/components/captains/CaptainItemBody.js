import React from 'react';

function CaptainItemBody({ name, title, describe }) {
    return (
        <div className='captain-item__body'>
            <h4 className='captain-item__name'> {name} </h4>
            <p className='captain-item__title'> {title} </p>
            <p className='captain-item__describe'> {describe} </p>
        </div>
    );
}

export default CaptainItemBody;
