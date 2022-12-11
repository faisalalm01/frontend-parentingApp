import React from 'react';
<<<<<<< HEAD
import { useSearchParams } from 'react-router-dom';

import ArticleList from '../components/article/ArticleList';
import Search from '../components/Search';
import ButtonArticle from '../components/ButtonArticle';

import { getAllArticles } from '../utils/data-article';

function ArticlePage() {
  const [searchParams, setSeacrhParams] = useSearchParams();

  const articles = getAllArticles();

  const [keyword, setKeyword] = React.useState(() => {
      return searchParams.get('keyword') || ''
  });

  async function onDetailHandler(id) {
      await ButtonArticle(id);

      // const { data } = await getAllArticles();
      // setArtciles(data);
  }

  function onKeywordChangeHandler(keyword) {
      setKeyword(keyword);
      setSeacrhParams({ keyword });
  }

  const filteredArticles = articles.filter((article) => {
      return article.title.toLowerCase().includes(
          keyword.toLowerCase()
      );
  });

  return (
      <section>
      <div className="container px-5 py-24 mx-auto text-xl">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Artikel Terkini</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base px-60">Temukan informasi dan tips terbaik seputar parenting, pendidikan anak, kegiatan kreatif, dan konten menarik lainnya untuk mendukung tumbuh kembang si Kecil.</p>
    </div>
    </div>
          <Search keyword={keyword} keywordChange={onKeywordChangeHandler} />
          <ArticleList articles={filteredArticles} onDetail={onDetailHandler} />

      </section>
  )
}

export default ArticlePage;
=======

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
>>>>>>> 8452ae2647f2d4df7fdf5b2d2a360a78742897a4
