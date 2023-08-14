import Image from "next/image";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

const page = () => {
  const handleCLick = null;

  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");

  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`/api/prompt/${promptId}`);
      const data = await response.json();

      setPost({
        prompt: data.prompt,
        tag: data.tag,
      });
    };

    if (promptId) getPromptDetails();
  }, [promptId]);
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
