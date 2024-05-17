import React from "react";
import Tilt from "react-parallax-tilt";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between dark:text-white">
        <div className="left flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl mt-6 mb-8">
            The{" "}
            <span className="bg-gradient-to-r from-fuchsia-600 to-purple-600 bg-clip-text text-transparent">
              Dimomix{" "}
            </span>
            team using treker
          </h1>
        </div>

        <div className="right flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <Tilt>
            <img
              src="https://kriptomat.io/wp-content/uploads/2021/12/hero_image_cryptocurrencies.png"
              alt="Hero-img"
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128   "
            />
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Hero;
