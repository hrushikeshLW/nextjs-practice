import React from "react";

const News = ({news}) => {
  return (
    <div>
      <h1>List of news</h1>
      {news.map((news) => {
        return (
          <div key={news.id}>
            <h2>
              {news.id} {news.title} | {news.category}
            </h2>
          </div>
        );
      })}
    </div>
  );
};
export default News;

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();

  return {
    props: {
      news: data,
    },
  };
}
