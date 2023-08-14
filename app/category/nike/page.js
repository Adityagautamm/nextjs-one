"use client";
import { CatelougeCard } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const page = () => {
  const [productData, setProductData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("/api/category/brand/nike");
    const data = await response.json();
    console.log("server data:", data);
    setProductData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="catelouge__container">
      {productData.map((product) => (
        <CatelougeCard product={product} />
      ))}
    </div>
  );
};

export default page;
