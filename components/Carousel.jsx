import React from "react";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import makeCarousel from "react-reveal/makeCarousel";

const Container = ({ children }) => {
  return <div className="h-[500px] overflow-hidden relative">{children}</div>;
};

const Slider = makeCarousel(Container);

const Carousel = () => {
  return (
    <Slider defaultWait={7000}>
      <Slide right>
        <div className="flex items-center h-full px-20 bg-right bg-home-bg md:bg-cover">
          <Fade>
            <h1 className="w-1/2 text-[50px] font-semibold text-white">
              Leading Market And Social Research Company In Ghana
            </h1>
          </Fade>
        </div>
      </Slide>
    </Slider>
  );
};

export default Carousel;
