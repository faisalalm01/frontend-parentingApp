import React from 'react';
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
          <Search keyword={keyword} keywordChange={onKeywordChangeHandler} />

          <ArticleList articles={filteredArticles} onDetail={onDetailHandler} />

      </section>
  )
}

export default ArticlePage;
