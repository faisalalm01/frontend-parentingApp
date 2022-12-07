import React from "react";
import ArticleItemBody from '../article/ArticleItemBody';
import ArticleItemImage from "../article/ArticleItemImage";

function ArticleItem({ publishedAt, title, description, content, urlToImage }) {
    return (
        <div className="article-item">
            <ArticleItemImage urlToImage={urlToImage} />
            <ArticleItemBody title={title} publishedAt={publishedAt} description={description} content={content} />
        </div>
    );
}

export default ArticleItem;
