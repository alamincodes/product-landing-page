import React from "react";
import { heroData } from "../data";
import Header from "./Header";

const Hero = () => {
  const { title, subtitle, image, btnText } = heroData;
  return (
    <section className="lg:h-[900px] py-12">
      <Header/>
      <div className="container mx-auto relative h-full">
        <div className="flex flex-col xl:flex-row items-center h-full md:py-24">
          {/* text */}
          <div className="text-center xl:text-left xl:absolute">
            <h1
              className="h1 xl:max-w-[700px] mb-6 lg:mb-12"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              {title}
            </h1>
            <p
              className="lead xl:max-w-[300px] mb-6 lg:mb-12"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              {subtitle}
            </p>
            <button
              className="btn btn-primary mb-8 xl:mb-0"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              {btnText}
            </button>
          </div>
          {/* image */}
          <div
            className="xl:absolute xl:-right-0 xl:bottom-16"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
