import React from 'react'
import { Link } from 'react-router-dom';

function ButtonArticle({id, onDetail}) {
    return (
        <button className='lihat-artikel' onClick={() => onDetail(id)}>
            <Link to={`/articles/${id}`}>Lihat Artikel</Link>
        </button>
    )
}

export default ButtonArticle;
