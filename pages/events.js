import { useRouter } from 'next/router';
import React, { useState } from 'react';

const ArticleListByCategory = ({ articles, category }) => {
  const [articlesData, setArticlesData] = useState(articles);
  const router = useRouter();
  const fetchData = async () => {
    const response = await fetch(
      `http://localhost:4000/news?category=sport`
    );
    const data = await response.json();
    setArticlesData(data);
    router.push(`/events?category=sport`);
  };
  console.log({articlesData})
  return (
    <div>
      <button onClick={fetchData}>fetch data for sports</button>
      <h1>Articles for {category} </h1>
      {articlesData.map((article) => (
        <div key={article.id}>
          <h2>
            {article.id} | {article.title} | {article.category}
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
  const {
    query: { category },
  } = context;
  const queryString = category ? `category=${category}` : '';
  const response = await fetch(`http://localhost:4000/news?${queryString}`);
  const data = await response.json();
  console.log({ data });
  if (data?.length < 1) {
    return { notFound: true };
  }
  return {
    props: {
      articles: data,
      category: category||'',
    },
  };
}
