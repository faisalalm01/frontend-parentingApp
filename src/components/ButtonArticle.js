import React from 'react'
import { Link } from 'react-router-dom';

function ButtonArticle({id, onDetail}) {
    return (
        <button className='w-full bg-blue-300 p-3 border rounded-3xl text-white font-bold hover:bg-blue-500' onClick={() => onDetail(id)}>
            <Link to={`/articles/${id}`}>Lihat Artikel</Link>
        </button>
    )
}

export default ButtonArticle;
