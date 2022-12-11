import React from "react";

import ArticleItemBody from '../article/ArticleItemBody';
import ArticleItemImage from "../article/ArticleItemImage";

function ArticleItem({ publishedAt, title, description, content, image }) {
    return (
        <div className="article-item">
            <ArticleItemImage image={image} />
            <ArticleItemBody title={title} publishedAt={publishedAt} description={description} content={content} />
        </div>
    );
}

export default ArticleItem;
