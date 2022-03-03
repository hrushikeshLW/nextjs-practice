import {useRouter} from "next/router";
import React from "react";
import Header from "../../../components/header";

const NewBlog = () => {
  const router = useRouter();
  const {id, comment} = router.query;
  return (
    <div>
      <Header />
      <h1>post :{id}</h1>
      <h3>comment :{comment}</h3>
    </div>
  );
};

export default NewBlog;
