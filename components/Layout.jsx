import React from "react";

//components
import Topbar from "./Topbar";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Topbar />
      <main className="min-h-screen">{children}</main>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Layout;
