import React from "react";
import Link from "next/link";
import { footerLinks } from "../utils/subLinks";

//components
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center px-6 py-20 space-y-10 md:px-10">
      <Logo />

      <ul className="grid grid-cols-3 gap-5 md:space-x-5 md:flex">
        {footerLinks.map(({ link, title }, idx) => {
          return (
            <li key={idx}>
              <Link href={link}>
                <a className="text-sm font-medium capitalize hover:text-primary">
                  {title}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>

      <p className="text-sm">URIKA Research © {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
