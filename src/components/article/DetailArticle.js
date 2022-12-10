import React from "react";

import ArticleItemBody from '../article/ArticleItemBody';
import ArticleItemImage from "../article/ArticleItemImage";

function DetailArticle({ describe, title, imageUrl }) {
    return (
        <section>
            <div className="article-item">
            <ArticleItemImage urlToImage={imageUrl} />
            <ArticleItemBody title={title} describe={describe} />
            </div>
        </section>
    );
}

export default DetailArticle;
