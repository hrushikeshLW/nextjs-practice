import Link from "next/link";
import {useRouter} from "next/router";
import Header from "../../../components/header";

const Product = () => {
  const router = useRouter();
  const {productId} = router.query;
  return (
    <>
      <Header />
      <div className="container">product {productId} details</div>
      <Link href={`${productId}/review/1`}>Review</Link>
    </>
  );
};

export default Product;
