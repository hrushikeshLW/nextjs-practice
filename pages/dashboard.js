import React from 'react';
import useSWR from 'swr';
const fetcher = async () => {
  const response = await fetch(`http://localhost:4000/dashboard`);
  const data = await response.json();
  return data;
};

const dashboard = () => {
  const { data, error } = useSWR('dashboard', fetcher);
  if (!data) return <h1>Loading...</h1>;
  if (error) return <h1>error is there</h1>;
  return (
    <div>
      <h1>dashboard</h1>
      <h2>post-{data?.post}</h2>
      <h2>like-{data?.like}</h2>
      <h2>share-{data?.share}</h2>
    </div>
  );
};
export default dashboard;
