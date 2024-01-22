import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

const CatelougeCard = ({ product }) => {
  const router = useRouter();
  const handleClick = (id) => {
    router.push(`/product?id=${product._id}`);
  };

  return (
    <div className="catelouge" onClick={handleClick}>
      <div className="catelouge__image-container">
        <Link href={`/product?id=${product._id}`}>
          <Image
            src={`/${product.image}.webp`}
            alt="hero"
            fill
            className="catelouge__image"
          />
        </Link>
      </div>
      {console.log("product", product)}
      <div className="catelouge__header">
        <h1 className="catelouge__title">{product.name}</h1>
      </div>
    </div>
  );
};

export default CatelougeCard;
