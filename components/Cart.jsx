"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { CartCard } from ".";
const Cart = () => {
  // make it global so that any page can close cart use jota
  const [showCart, setShowCart] = useState(false);
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    toggleCartItemQuanitity,
    onRemove,
  } = {
    totalPrice: "10",
    totalQuantities: "2",
    cartItems: { length: 1 },
    setShowCart: "40",
    toggleCartItemQuanitity: "50",
    onRemove: "60",
  };
  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="heading"> Your Cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </button>
        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Your shopping cart is empty</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="empty-cart-btn"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
        <div className="product-container">
          {
            /* {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div className="product" key={item._id}>
                <Image src="one.webp" className="cart-product-image" />
                <div className="item-desc">
                  <div className="item-desc-top">TOP</div>
                  <div className="item-desc-bottom">BOTTOM</div>
                </div>
              </div>
            ))} */
            // prototype, update code once Jotai is set
            cartItems.length >= 1 && <CartCard />
          }
        </div>
      </div>
    </div>
  );
};

export default Cart;
