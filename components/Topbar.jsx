import React from "react";
import { useRouter } from "next/router";

//mui
import { Button } from "@mui/material";

//components
import Menu from "./Menu";
import Logo from "./Logo";

const Topbar = () => {
  const router = useRouter();

  return (
    <nav className="top-0 z-50 flex items-center justify-between w-full px-5 py-2 shadow-sm md:px-10 md:py-4">
      <Menu />

      <Logo />

      <Button
        variant="outlined"
        size="small"
        color="primary"
        className="hidden md:block"
        onClick={() => router.push("/contact-us")}
      >
        Get In Touch
      </Button>
    </nav>
  );
};

export default Topbar;
