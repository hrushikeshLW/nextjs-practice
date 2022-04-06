import Link from "next/link";
import {useRouter} from "next/router";
import React from "react";

const PostDetail = ({post}) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>loading....</h1>;
  }
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
  // const paths = data.map((val) => {
  //   return {
  //     params: {postId: `${val?.id}`},
  //   };
  // });
  return {
    paths: [
      {
        params: {postId: `1`},
      },
      {
        params: {postId: `2`},
      },
    ],
    fallback: true,
  };
};
export const getStaticProps = async (context) => {
  const {params} = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.postId}`
  );
  const data = await response.json();
  if (!data.id) {
    return {notFound: true};
  }
  return {
    props: {
      post: data,
    },
  };
};

export default PostDetail;
