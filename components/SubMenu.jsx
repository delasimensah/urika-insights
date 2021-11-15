import React from "react";
import Link from "next/link";

//mui
import { List, Collapse } from "@mui/material";

const AboutSubMenu = ({ open, links }) => {
  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="ul" disablePadding className="pl-6">
        {links.map(({ link, title }, idx) => {
          return (
            <li key={idx} className="py-4 cursor-pointer group">
              <Link href={link}>
                <a className="pl-2 text-sm uppercase group-hover:border-l">
                  {title}
                </a>
              </Link>
            </li>
          );
        })}
      </List>
    </Collapse>
  );
};

export default AboutSubMenu;
