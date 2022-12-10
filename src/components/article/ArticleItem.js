import React from "react";

import ArticleItemBody from "../article/ArticleItemBody";
import ArticleItemImage from "../article/ArticleItemImage";

import ButtonArticle from "../ButtonArticle";

function ArticleItem({ describe, title, image, id, onDetail }) {
  return (
    <section className="article-item xl:w-1/3 md:w-1/2 p-9">
      <div className="p-6 rounded-lg h-auto border-gray-300 border-2 shadow-2xl">
        <div>
        <ArticleItemImage image={image} />
        <ArticleItemBody title={title} describe={describe} />
        </div>
      <div>
        <ButtonArticle id={id} onDetail={onDetail} />
      </div>
      </div>
      
    </section>
  );
}

export default ArticleItem;
