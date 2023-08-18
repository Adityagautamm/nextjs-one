"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const page = () => {
  const handleCLick = null;

  const router = useRouter();
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const getProductData = async () => {
      const response = await fetch(`/api/product/${productId}`);
      const data = await response.json();

      setProductData({
        data,
      });
    };

    if (productId) getProductData();
  }, [productId]);

  console.log(productData);
  return (
    <div className="product__container">
      <div className="product__containe-left">
        left
        <Image
          src="/one.webp"
          alt="hero"
          fill
          className="product__containe-left-image"
        />
      </div>
      <div className="product__container-right">
        <h1 className="product__title">Name of the product</h1>
        <p className="product__subtitle">
          streamline your car rental experience with our effortless booking.
          Prices are slashed for End of Year sale. No one does it better than
          us. Call us 1800-001-001
        </p>
        <button onClick={handleCLick} className="add-to-cart-btn">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default page;
