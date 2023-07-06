"use client";

import Image from "next/image";
import { CustomButton } from ".";

const Hero = () => {
  const handleScroll = () => {
    console.log("button clicked");
  };
  return (
    <div className="hero">
      <div className=" hero__left">
        {/* <div className=" flex-1 pt-36 padding-x "> */}
        <h1 className="hero__title">
          Find book or rent a car quickly and easily
        </h1>
        <p className="hero__subtitle">
          streamline your car rental experience with our effortless booking.
          Prices are slashed for End of Year sale. No one does it better than
          us. Call us 1800-001-001
        </p>
        {/* <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        /> */}
      </div>
      <div className="hero__image-container">
        <div>
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
          <div className="hero__image-overlay" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
