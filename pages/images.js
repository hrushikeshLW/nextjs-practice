import Image from "next/image";
const Images = () => {
  return (
    <>
      <Image
        src={`/images/assets/1.jpg`}
        alt="next-img"
        width="250"
        height="480"
      />
      {["1", "2", "3", "4", "5"].map((val) => {
        return (
          <div key={val}>
            <Image
              src={`/images/assets/${val}.jpg`}
              alt="next-img"
              width="250"
              height="480"
            />
          </div>
        );
      })}
    </>
  );
};

export default Images;
