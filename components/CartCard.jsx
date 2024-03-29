import React from "react";
import Image from "next/image";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";

const CartCard = (key, productName, quantity, price, image) => {
  return (
    <div className="product">
      <div className="cart-product-image">
        <Image
          src={`/${image}.webp`}
          className="object-contain"
          alt="product"
          fill
        />
      </div>
      <div className="item-desc">
        <div className="item-desc-top">
          <div className="cart-product-name">{productName}</div>
          <div className="cart-product-price">{`$${price}`}</div>
        </div>
        <div className="item-desc-bottom">
          <div>
            <p className="quantity-desc">
              <span
                className="minus"
                onClick={() => {
                  () => "";
                }}
              >
                <AiOutlineMinus />
              </span>
              <span className="num" onClick="">
                0
              </span>
              <span
                className="plus"
                onClick={() => {
                  () => "";
                }}
              >
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <button type="button" className="remove-item" onClick={() => ""}>
            <TiDeleteOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
