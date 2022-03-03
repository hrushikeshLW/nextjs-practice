import Link from "next/link";

const Header = () => (
  <header className="header-text">
    <ol>
      <li>
        <Link href="/">
          <a className="text">Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a className="text">About</a>
        </Link>
      </li>
      <li>
        <Link href="/blog/first">
          <a className="text">First Post</a>
        </Link>
      </li>
      <li>
        <Link href="/blog/second">
          <a className="text">Second Post</a>
        </Link>
      </li>
      <li>
        <Link href="/product">
          <a className="text">Product</a>
        </Link>
      </li>
      <li>
        <Link href="/posts">
          <a className="text">Posts</a>
        </Link>
      </li>
    </ol>
    <style jsx>{`
      header {
        width: 100%;
      }
      ol {
        display: flex;
        margin: 10px;
        list-style-type: none;
        background-color: grey;
      }
      li {
        margin: 10px;
      }
      .text {
        color: white;
      }
    `}</style>
  </header>
);

export default Header;
