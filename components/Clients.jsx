import React from "react";
import Fade from "react-reveal/Fade";

const Clients = () => {
  return (
    <Fade left cascade distance="80px" smooth duration={1500}>
      <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4">
        <img src="/clients/logo-1.png" alt="" />
        <img src="/clients/logo-1.png" alt="" />
        <img src="/clients/logo-1.png" alt="" />
        <img src="/clients/logo-1.png" alt="" />
        <img src="/clients/logo-1.png" alt="" />
        <img src="/clients/logo-1.png" alt="" />
        <img src="/clients/logo-1.png" alt="" />
        <img src="/clients/logo-1.png" alt="" />
      </div>
    </Fade>
  );
};

export default Clients;
