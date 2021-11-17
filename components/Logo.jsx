import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <img src="/logo.jpg" alt="" className="cursor-pointer w-[120px]" />
    </Link>
  );
};

export default Logo;
