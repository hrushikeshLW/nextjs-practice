import Link from "next/link";
import Header from "../../components/header";

const Product = () => {
  return (
    <div className="container">
      <Header />
      <ul>
        <li>
          <Link href="/product/1">product 1</Link>
        </li>
        <li>
          <Link href="/product/2">product 2</Link>
        </li>
        <li>
          <Link href="/product/3">product 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default Product;
