import Link from "next/link";
import React from "react";

const PostDetail = ({post}) => {
  return (
    <div>
      <h1>
        {post?.id} {post?.title}
      </h1>
      <p>{post?.body}</p>
    </div>
  );
};

export const getStaticPaths = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();
  const paths = data.map((val) => {
    return {
      params: {postId: `${val?.id}`},
    };
  });
  console.log({paths});
  return {
    paths: paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const {params} = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.postId}`
  );
  const data = await response.json();
  return {
    props: {
      post: data,
    },
  };
};

export default PostDetail;
