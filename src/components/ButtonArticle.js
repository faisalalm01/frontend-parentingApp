import React from 'react'
<<<<<<< HEAD
import { Link } from 'react-router-dom';

function ButtonArticle({id, onDetail}) {
    return (
        <button className='w-full bg-blue-300 p-3 border rounded-3xl text-white font-bold hover:bg-blue-500' onClick={() => onDetail(id)}>
            <Link to={`/articles/${id}`}>Lihat Artikel</Link>
=======

function ButtonArticle(id, seeArticle) {
    return (
        <button className='lihat-artikel' onClick={() => seeArticle(id)}>
            Lihat Artikel
>>>>>>> 8452ae2647f2d4df7fdf5b2d2a360a78742897a4
        </button>
    )
}

export default ButtonArticle;
