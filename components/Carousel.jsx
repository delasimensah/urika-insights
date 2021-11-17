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
        <div className="flex items-center h-full px-6 bg-right md:px-14 lg:px-20 bg-home-bg md:bg-cover">
          <Fade left distance="30px" smooth duration={1000}>
            <h1 className="w-4/5 md:w-1/2 text-2xl md:text-[32px] lg:text-[40px] leading-normal xl:text-6xl font-semibold text-white capitalize">
              <p className="text-secondary">Using the</p>{" "}
              <p className="text-primary">power of data</p>{" "}
              <p className="text-secondary">to serve africa</p>
            </h1>
          </Fade>
        </div>
      </Slide>
    </Slider>
  );
};

export default Carousel;
