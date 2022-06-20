import Link from 'next/link';
import React from 'react';

const News = ({ news }) => {
  return (
    <div>
      <h1>List of news</h1>
      {news.map((news) => {
        return (
          <Link href={`news/${news.id}`}>
            <div key={news.id}>
              <h2>
                {news.id} {news.title} | {news.category}
              </h2>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default News;

export async function getServerSideProps() {
  const response = await fetch('http://localhost:4000/news');
  const data = await response.json();

  return {
    props: {
      news: data,
    },
  };
}
