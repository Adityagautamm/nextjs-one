import Image from "next/image";

const Card = () => {
  return (
    <div className="card">
      <div className="card__image-container">
        <Image src="/h1.webp" alt="hero" fill className="card__image" />
      </div>
      <div className="card__header">
        <h1 className="card__title">EV</h1>
      </div>
    </div>
  );
};

export default Card;
