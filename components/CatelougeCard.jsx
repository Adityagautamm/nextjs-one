import Image from "next/image";
import Link from "next/link";

const CatelougeCard = () => {
  return (
    <div className="catelouge">
      <div className="catelouge__image-container">
        <Link href="/category/nike">
          <Image src="/h1.webp" alt="hero" fill className="catelouge__image" />
        </Link>
      </div>

      <div className="catelouge__header">
        <h1 className="catelouge__title">EV</h1>
      </div>
    </div>
  );
};

export default CatelougeCard;
