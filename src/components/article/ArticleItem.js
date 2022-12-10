import React from "react";

import ArticleItemBody from '../article/ArticleItemBody';
import ArticleItemImage from "../article/ArticleItemImage";

import ButtonArticle from '../ButtonArticle';

function ArticleItem({ describe, title, imageUrl, id, onDetail }) {
    return (
        <section>
            <div className="article-item">
            <ArticleItemImage urlToImage={imageUrl} />
            <ArticleItemBody title={title} describe={describe} />
            </div>

            <div>
                <ButtonArticle id={id} onDetail={onDetail} />
            </div>
            </section>
    );
}

export default ArticleItem;
