import React from "react";
import Fade from "react-reveal/Fade";

const Clients = () => {
  return (
    <Fade left cascade distance="80px" smooth duration={1500}>
      <div className="grid grid-cols-2 gap-5 md:gap-10 md:grid-cols-4">
        <img src="/clients/logo1.jpg" alt="" />
        <img src="/clients/logo2.png" alt="" />
        <img src="/clients/logo3.jpg" alt="" />
        <img src="/clients/logo4.png" alt="" />
        <img src="/clients/logo5.png" alt="" />
        <img src="/clients/logo6.png" alt="" />
        <img src="/clients/logo7.png" alt="" />
        <img src="/clients/logo8.png" alt="" />
      </div>
    </Fade>
  );
};

export default Clients;
