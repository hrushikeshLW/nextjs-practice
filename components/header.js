import Link from 'next/link';
import { signIn, signOut } from 'next-auth/react';

const Header = () => {
  return (
    <header className='header-text'>
      <div>
        <ol>
          <li>
            <Link href='/'>
              <a className='text'>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a className='text'>About</a>
            </Link>
          </li>
          <li>
            <Link href='/blog/first'>
              <a className='text'>First Post</a>
            </Link>
          </li>
          <li>
            <Link href='/blog/second'>
              <a className='text'>Second Post</a>
            </Link>
          </li>
          <li>
            <Link href='/product'>
              <a className='text'>Product</a>
            </Link>
          </li>
          <li>
            <Link href='/posts'>
              <a className='text'>Posts</a>
            </Link>
          </li>
          <li>
            <Link href='/news'>
              <a className='text'>News</a>
            </Link>
          </li>
          <li>
            <Link href='/photos'>
              <a className='text'>Photo Gallery</a>
            </Link>
          </li>
          <li>
            <Link href='/api/auth/signin'>
              <a
                className='text'
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
              >
                Sign In
              </a>
            </Link>
          </li>

          <li>
            <Link href='/api/auth/signout'>
              <a
                className='text'
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign Out
              </a>
            </Link>
          </li>
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
        .text {
          color: white;
        }
      `}</style>
    </header>
  );
};

export default Header;
