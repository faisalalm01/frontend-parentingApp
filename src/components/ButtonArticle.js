import React from 'react'

function ButtonArticle(id, seeArticle) {
    return (
        <button className='lihat-artikel' onClick={() => seeArticle(id)}>
            Lihat Artikel
        </button>
    )
}

export default ButtonArticle;
