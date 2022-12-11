import React from "react";
<<<<<<< HEAD

import ArticleItem from "./ArticleItem";

function ArticleList({ articles }) {
  return (
    <div className="container px-10 py-24 mx-auto">
      <div className="flex flex-wrap m-2">
        {articles.map((article) => (
          <ArticleItem key={article.id} {...article} />
        ))}
      </div>
    </div>
  );
=======
import ArticleItem from "./ArticleItem";

function ArticleList({ articles }) {
    return (
        <div>
            {
              articles.map((article) => (
                <ArticleItem key={article.id} {...article} />
                ))
            }
        </div>
    );
>>>>>>> 8452ae2647f2d4df7fdf5b2d2a360a78742897a4
}

export default ArticleList;
