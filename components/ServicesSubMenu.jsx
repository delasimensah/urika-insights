import React from "react";
import Link from "next/link";

//mui
import { List, Collapse } from "@mui/material";

const servicesLinks = [
  {
    link: "/services",
    title: "360 customer experience optimizer (360 CEO)",
  },
];

const ServicesSubMenu = ({ services }) => {
  return (
    <Collapse in={services} timeout="auto" unmountOnExit>
      <List component="ul" disablePadding className="pl-4">
        {servicesLinks.map(({ link, title }, idx) => {
          return (
            <li className="py-4">
              <Link href={link} key={idx}>
                <a className="pl-2 text-sm uppercase hover:border-l">{title}</a>
              </Link>
            </li>
          );
        })}
      </List>
    </Collapse>
  );
};

export default ServicesSubMenu;
