import Head from "next/head";
const HeadComp = ({name, description}) => {
  return (
    <Head>
      <title>{name || `next practice`}</title>
      <meta
        name="description"
        content={description || `practice app for next js`}
      ></meta>
    </Head>
  );
};

export default HeadComp;
