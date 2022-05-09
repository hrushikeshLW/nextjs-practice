import Image from "next/image";

function Photo({photoData}) {
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
  const paths = data?.slice(0, 10)?.map((photo) => {
    return {
      params: {photoId: `${photo?.id}`},
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
}

export const getStaticProps = async (context) => {
  const {params} = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${params?.photoId}`
  );
  const data = await response.json();
  return {
    props: {
      photoData: data,
    },
  };
};
export default Photo;
