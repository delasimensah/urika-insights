import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import makeCarousel from "react-reveal/makeCarousel";

const Container = ({ children }) => {
  return (
    <div className="relative h-[350px] md:h-[450px] overflow-hidden">
      {children}
    </div>
  );
};

const Slider = makeCarousel(Container);

const Clients = () => {
  return (
    <Slider defaultWait={5000}>
      <Slide right>
        <div className="flex items-center justify-center min-h-full">
          <Fade left cascade distance="80px" smooth duration={1500}>
            <div className="grid grid-cols-4 gap-5 md:gap-10 md:grid-cols-6">
              <div className="self-center justify-self-center">
                <img src="/clients/logo1.jpg" alt="" />
              </div>
              <div className="self-center justify-self-center">
                <img src="/clients/logo2.png" alt="" />
              </div>
              <div className="self-center justify-self-center">
                <img src="/clients/logo3.jpg" alt="" />
              </div>
              <div className="self-center justify-self-center">
                <img src="/clients/logo4.png" alt="" />
              </div>
              <div className="self-center justify-self-center">
                <img src="/clients/logo5.png" alt="" />
              </div>
              <div className="self-center justify-self-center">
                <img src="/clients/logo6.png" alt="" />
              </div>
              <div className="self-center justify-self-center">
                <img src="/clients/logo7.png" alt="" />
              </div>
              <div className="self-center justify-self-center">
                <img src="/clients/logo8.png" alt="" />
              </div>
              <div className="self-center justify-self-center">
                <img src="/clients/logo9.png" alt="" />
              </div>
              <div className="self-center justify-self-center">
                <img src="/clients/logo10.png" alt="" />
              </div>
              <div className="self-center justify-self-center">
                <img src="/clients/logo11.jpg" alt="" />
              </div>
              <div className="self-center justify-self-center">
                <img src="/clients/logo12.png" alt="" />
              </div>
            </div>
          </Fade>
        </div>
      </Slide>

      <Slide right>
        <div className="flex items-center justify-center min-h-full">
          <Fade left cascade distance="80px" smooth duration={1500}>
            <div className="grid grid-cols-4 gap-5 md:gap-10 md:grid-cols-6">
              <div className="self-center justify-self-center">
                <img src="/clients/logo13.png" alt="" />
              </div>
              <div className="self-center justify-self-center">
                <img src="/clients/logo14.jpg" alt="" />
              </div>
              <div className="self-center justify-self-center">
                <img src="/clients/logo15.jpg" alt="" />
              </div>
              <div className="self-center justify-self-center">
                <img src="/clients/logo16.png" alt="" />
              </div>
              <div className="self-center justify-self-center">
                <img src="/clients/logo17.png" alt="" />
              </div>
              <div className="self-center justify-self-center">
                <img src="/clients/logo18.jpg" alt="" />
              </div>
              <div className="self-center justify-self-center">
                <img src="/clients/logo19.png" alt="" />
              </div>
              <div className="self-center justify-self-center">
                <img src="/clients/logo20.jpg" alt="" />
              </div>
              <div className="self-center justify-self-center">
                <img src="/clients/logo21.png" alt="" />
              </div>
              <div className="self-center justify-self-center">
                <img src="/clients/logo22.png" alt="" />
              </div>
              <div className="self-center justify-self-center">
                <img src="/clients/logo23.png" alt="" />
              </div>
              <div className="self-center justify-self-center">
                <img src="/clients/logo24.png" alt="" />
              </div>
            </div>
          </Fade>
        </div>
      </Slide>

      <Slide right>
        <div className="flex items-center justify-center min-h-full">
          <Fade left cascade distance="80px" smooth duration={1500}>
            <div className="grid grid-cols-4 gap-5 md:gap-10 md:grid-cols-6">
              <div className="self-center justify-self-center">
                <img src="/clients/logo25.png" alt="" />
              </div>
              <div className="self-center justify-self-center">
                <img src="/clients/logo26.png" alt="" />
              </div>
              <div className="self-center justify-self-center">
                <img src="/clients/logo27.png" alt="" />
              </div>
              <div className="self-center justify-self-center">
                <img src="/clients/logo28.png" alt="" />
              </div>
              <div className="self-center justify-self-center">
                <img src="/clients/logo29.png" alt="" />
              </div>
              <div className="self-center justify-self-center">
                <img src="/clients/logo30.png" alt="" />
              </div>
              <div className="self-center justify-self-center">
                <img src="/clients/logo31.png" alt="" />
              </div>
              <div className="self-center justify-self-center">
                <img src="/clients/logo32.png" alt="" />
              </div>
              <div className="self-center justify-self-center">
                <img src="/clients/logo33.png" alt="" />
              </div>
              <div className="self-center justify-self-center">
                <img src="/clients/logo34.jpg" alt="" />
              </div>
              <div className="self-center justify-self-center">
                <img src="/clients/logo35.png" alt="" />
              </div>
              <div className="self-center justify-self-center">
                <img src="/clients/logo36.jpg" alt="" />
              </div>
            </div>
          </Fade>
        </div>
      </Slide>
    </Slider>
  );
};

export default Clients;
