import React from "react";

//components
import Topbar from "./Topbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Topbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
