import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Header = () => {
  const { data, status } = useSession();
  console.log({ data });
  return (
    <header className="header-text">
      <div>
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
          <li>
            <Link href="/news">
              <a className="text">News</a>
            </Link>
          </li>
          <li>
            <Link href="/photos">
              <a className="text">Photo Gallery</a>
            </Link>
          </li>
          {!data && (
            <li>
              <Link href="/api/auth/signin">
                <a
                  className="text"
                  onClick={(e) => {
                    e.preventDefault();
                    signIn();
                  }}
                >
                  Sign In
                </a>
              </Link>
            </li>
          )}

          {data && (
            <>
              <li>
                <Link href="/api/auth/signout">
                  <a
                    className="text"
                    onClick={(e) => {
                      e.preventDefault();
                      signOut();
                    }}
                  >
                    Sign Out
                  </a>
                </Link>
              </li>
              <li>
                <Image
                  className="profile-image"
                  src={data?.user?.image}
                  alt="profile"
                  height="20"
                  width="20"
                ></Image>
              </li>
            </>
          )}
        </ol>
      </div>

      <style jsx>{`
        header {
          width: 100%;
        }
        .end-element {
          justify-content: end;
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

        .profile-image {
          border-radius: 50%;
        }
        .text {
          color: white;
        }
      `}</style>
    </header>
  );
};

export default Header;
