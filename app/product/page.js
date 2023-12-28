"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { onAdd } from "../store/cartStore";

const page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");
  const [productData, setProductData] = useState([]);
  const handleCLick = null;

  const fetchData = async () => {
    const response = await fetch(`/api/product/id:${productId}`);
    const data = await response.json();
    console.log("server data:", data);
    setProductData(data);
  };

  useEffect(() => {
    fetchData();
  }, [productId]);

  console.log("product data:", productData);
  console.log("productId", productId);
  return (
    <div className="product__container">
      <div className="product__containe-left">
        <Image
          src={`/${productData?.image}.webp`}
          alt="hero"
          fill
          className="product__containe-left-image"
        />
      </div>
      <div className="product__container-right">
        <h1 className="product__title">{productData?.name}</h1>
        <p className="product__subtitle">{productData?.description}</p>
        <h1 className="product__price">{`$${productData?.price}`}</h1>
        <button onClick={onAdd} className="add-to-cart-btn">
          Add to cart
        </button>

        {/* I need to add qty + - to set quantity and get from cart store */}
      </div>
    </div>
  );
};

export default page;
