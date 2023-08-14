import Image from "next/image";
import Link from "next/link";

const CatelougeCard = ({ product }) => {
  const handleClick = (id) => {
    router.push(`/product?id=${id}`);
  };

  return (
    <div className="catelouge">
      <div className="catelouge__image-container">
        <Link href="/product?id=12345">
          <Image
            src={`/${product.image}`}
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
