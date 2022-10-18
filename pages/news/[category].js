import React from 'react';

const ArticleListByCategory = ({ articles, category }) => {
  return (
    <div>
      <h1>Articles for {category} </h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>
            {article.id} | {article.title}
          </h2>
          <h4>{article.description}</h4>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ArticleListByCategory;

export async function getServerSideProps(context) {
  const {params,query}=context
  console.log(query)
  const response = await fetch(
    `http://localhost:4000/news?category=${params?.category}`
  );
  const data = await response.json();
  console.log({ data });
  if (data?.length < 1) {
    return { notFound: true };
  }
  return {
    props: {
      articles: data,
      category: params?.category,
    },
  };
}
