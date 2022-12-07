import React from 'react';

import ArticleList from '../components/article/ArticleList';

import { getAllData } from '../utils/api';

function ArticlePage() {
  const articles = getAllData();

  return (
    <section className='article-page'>
      <div>
        <h2 className='artcile-page__current-artcle'>Artikel Terkini</h2>
        <p>Temukan Informasi dan tips terbaik seputar pendidikan anak, kegiatan kreatif, dan konten menarik lainnya untuk mendukung tumbuh kembang si Kecil.</p>
      </div>
        

      <div>
        <ArticleList articles={articles} />
      </div>
    </section>
  );
}

export default ArticlePage;