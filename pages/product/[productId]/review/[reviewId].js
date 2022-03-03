import Link from "next/link";
import {useRouter} from "next/router";
import Header from "../../../../components/header";

const Review = () => {
  const router = useRouter();
  const {productId, reviewId} = router.query;
  const handleClick = () => {
    router.push(`/product/${productId}`);
  };
  return (
    <>
      <Header />
      <div className="container">
        review {reviewId} of product {productId}
      </div>
      <button onClick={handleClick}>Go to Product</button>
    </>
  );
};

export default Review;
