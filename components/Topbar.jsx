import React from "react";

//mui
import { Button } from "@mui/material";

//components
import Menu from "./Menu";
import Logo from "./Logo";

const Topbar = () => {
  return (
    <nav className="top-0 z-50 flex justify-between w-full px-5 py-2 md:px-10 md:py-4 ">
      <Menu />

      <Logo />

      <Button variant="outlined" size="small" className="hidden md:block">
        Get In Touch
      </Button>
    </nav>
  );
};

export default Topbar;
