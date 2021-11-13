import React from "react";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import makeCarousel from "react-reveal/makeCarousel";

const Container = ({ children }) => {
  return (
    <div className="h-[300px] md:h-[500px] overflow-hidden relative">
      {children}
    </div>
  );
};

const Slider = makeCarousel(Container);

const Carousel = () => {
  return (
    <Slider defaultWait={30000}>
      <Slide right>
        <div className="flex items-center h-full px-10 bg-right md:px-20 bg-home-bg md:bg-cover">
          <Fade left>
            <h1 className="w-4/5 md:w-1/2 text-2xl md:text-[32px] lg:text-[40px] lg:leading-normal xl:text-[48px] font-semibold text-white">
              Leading Market And Social Research Company In Ghana
            </h1>
          </Fade>
        </div>
      </Slide>
    </Slider>
  );
};

export default Carousel;
