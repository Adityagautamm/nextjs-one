"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { Cart } from "@/components";
import { UseShowCart } from "../app/store/cartStore";
//Add cart logo and the use state for that https://www.youtube.com/watch?v=4mOkFXyxfsU&t=243s
const Navbar = () => {
  const [showCart, setShowCart] = UseShowCart();
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
          <button
            type="button"
            className="cart-icon"
            onClick={() => setShowCart(true)}
          >
            <AiOutlineShopping />
            <span className="cart-item-qty">1</span>
          </button>
          {showCart && <Cart />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
