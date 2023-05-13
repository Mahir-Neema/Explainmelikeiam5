import React from 'react';

function ArticleDetail(props) {
  return (
    <div>
      <h2>{props.article.title}</h2>
      <p>{props.article.content}</p>
    </div>
  );
}

export default ArticleDetail;
