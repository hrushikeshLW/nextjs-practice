import Link from "next/link";
import {useRouter} from "next/router";
import Header from "../../../components/header";

const Blog = () => {
  const router = useRouter();
  const {id} = router.query;
  return (
    <>
      <Header />
      <h1> post : {id}</h1>
      <ul>
        <li>
          <Link href={`${id}/first-comment`}>first comment</Link>
        </li>
        <li>
          <Link href={`${id}/second-comment`}>second comment</Link>
        </li>
      </ul>
    </>
  );
};

export default Blog;
