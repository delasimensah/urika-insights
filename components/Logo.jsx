import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <h1 className="text-lg cursor-pointer md:text-xl">
        <span className="text-secondary">URIKA</span>{" "}
        <span className="text-primary">Insights</span>
      </h1>
    </Link>
  );
};

export default Logo;
