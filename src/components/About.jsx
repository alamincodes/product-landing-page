import React from "react";
import { aboutData } from "../data";

const About = () => {
  const { image, title, subtitle } = aboutData;
  return (
    <section
      className="my-32 xl:mt-[100px]"
      data-aos="fade-up"
      data-aos-offset="350"
    >
      <div className="container mx-auto">
        <div className="bg-accent-secondary/[15%] rounded-[50px] min-h-[560px] px-12 pb-12 text-center flex flex-col xl:flex-row xl:items-center xl:gap-x-[60px] xl:text-left xl:pb-0">
          {/* image */}
          <div className="flex-1" data-aos ="zoom-in-left">
            <img src={image} alt="" />
          </div>
          {/* text */}
          <div className="flex-1">
            <h3 className="h2 xl:pr-12 mb-10"
            data-aos="fade-up"
            data-aos-delay="300"
            >{title}</h3>
            <p className="max-w-[474px] xl:mx-0 mx-auto"
             data-aos="fade-up"
             data-aos-delay="400"
            >{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
