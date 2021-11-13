import React from "react";
import Slide from "react-reveal/Slide";
import makeCarousel from "react-reveal/makeCarousel";

const Container = ({ children }) => {
  return <div className="h-[500px] overflow-hidden relative">{children}</div>;
};

const Slider = makeCarousel(Container);

const Carousel = () => {
  return (
    <Slider defaultWait={7000}>
      <Slide right>
        <div className="h-full bg-right bg-home-bg md:bg-cover">Slide One</div>
      </Slide>
      <Slide right>
        <div className="h-full bg-center bg-home-bg md:bg-cover">Slide Two</div>
      </Slide>
    </Slider>
  );
};

export default Carousel;
