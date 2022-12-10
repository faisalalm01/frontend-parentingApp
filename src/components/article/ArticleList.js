import React from "react";

import ArticleItem from "./ArticleItem";

function ArticleList({ articles }) {
  return (
    <div className="border container px-10 py-24 mx-auto">
      <div className="flex flex-wrap m-2">
        {articles.map((article) => (
          <ArticleItem key={article.id} {...article} />
        ))}
      </div>
    </div>
  );
}

export default ArticleList;
