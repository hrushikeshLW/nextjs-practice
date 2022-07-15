import Link from "next/link";
import Router, {useRouter} from "next/router";
import Header from "../../../components/header";

const Product = () => {
  const router = useRouter();
  const {productId} = router.query;
  return (
    <>
      <div className="container">product {productId} details</div>
      <Link href={`${productId}/review/1`}>Review</Link>
    </>
  );
};

export default Product;
