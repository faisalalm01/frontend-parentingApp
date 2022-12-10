import React from "react";

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
}

export default ArticleList;
