import React from "react";

//components
import Menu from "./Menu";

const Topbar = () => {
  return (
    <nav className="top-0 z-50 flex justify-between w-full md:px-10 md:py-2 ">
      <Menu />
    </nav>
  );
};

export default Topbar;
