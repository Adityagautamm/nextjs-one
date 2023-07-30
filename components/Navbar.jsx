import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="navbar">
      <nav className="navbar__body">
        <div className="navbar__right">
          <Link href="/" className="">
            <Image
              src="/logo.svg"
              alt="logo"
              width={118}
              height={18}
              className="object-contain"
            />
          </Link>
        </div>
        <div className="navbar__left">
          <div className="navbar__left-links">
            <ul>
              <li className="navbar__links">
                <Link href="/">one</Link>
              </li>
              <li className="navbar__links">
                <Link href="/">two</Link>
              </li>
              <li className="navbar__links">
                <Link href="/">three</Link>
              </li>
              <li className="navbar__links">
                <Link href="/">four</Link>
              </li>
              <li className="navbar__links">
                <Link href="/">five</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar__left-button">
          <button> Sign In </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
