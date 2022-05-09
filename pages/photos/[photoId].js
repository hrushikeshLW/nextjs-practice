import Image from "next/image";
import {useRouter} from "next/router";

function Photo({photoData}) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading.....</h1>;
  }
  return (
    <div>
      <h1>
        {photoData?.id} {photoData?.title}
      </h1>
      <Image src={photoData?.url} width="500" height="500" />
    </div>
  );
}

export async function getStaticPaths() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/photos`);
  const data = await response.json();
  // const paths = data?.slice(0, 10)?.map((photo) => {
  //   return {
  //     params: {photoId: `${photo?.id}`},
  //   };
  // });
  return {
    paths: [
      {params: {photoId: "1"}},
      {params: {photoId: "2"}},
      {params: {photoId: "3"}},
    ],
    fallback: true,
  };
}

export const getStaticProps = async (context) => {
  const {params} = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${params?.photoId}`
  );
  const data = await response.json();
  if (!data.id) {
    return {notFound: true};
  }
  return {
    props: {
      photoData: data,
    },
  };
};
export default Photo;
