import {resolveHref} from "next/dist/shared/lib/router/router";
import Image from "next/image";
import Link from "next/link";

const Photos = ({photosData}) => {
  return (
    <div>
      <h1>Photo album</h1>
      {photosData.map((photo) => {
        return (
          <div key={photo?.id}>
            <Link href={`photos/${photo?.id}`} passHref>
              <div>
                <p>{photo?.title}</p>
                <Image
                  src={photo?.thumbnailUrl}
                  alt="photos"
                  width="200"
                  height="200"
                />
              </div>
            </Link>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const data = await response.json();
  return {
    props: {
      photosData: data,
    },
  };
};

export default Photos;
