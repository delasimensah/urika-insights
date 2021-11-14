import { useState } from "react";
import { GrMenu } from "react-icons/gr";
import { IoChevronDown, IoChevronUp, IoClose } from "react-icons/io5";
import { useRouter } from "next/router";
import { aboutLinks, servicesLinks, toolsLinks } from "../utils/subLinks";

//mui
import { IconButton, Drawer, List } from "@mui/material";

//components
import SubMenu from "./SubMenu";
import MenuItem from "./MenuItem";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [about, setAbout] = useState(false);
  const [services, setServices] = useState(false);
  const [tools, setTools] = useState(false);

  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleAbout = () => {
    setAbout(!about);
  };

  const toggleServices = () => {
    setServices(!services);
  };

  const toggleTools = () => {
    setTools(!tools);
  };

  return (
    <>
      <IconButton
        onClick={toggleMenu}
        className="p-0 hover:bg-transparent"
        disableRipple
      >
        <GrMenu className="text-black w-7 h-7" />
      </IconButton>

      <Drawer anchor="left" open={menuOpen} onClose={toggleMenu}>
        <List
          className="h-full w-[350px] lg:w-[400px] overflow-x-hidden overflow-y-auto bg-black text-white"
          id="menu"
        >
          <div className="px-5 py-3">
            <IconButton
              onClick={toggleMenu}
              className="p-0 hover:bg-transparent"
            >
              <IoClose className="w-8 h-8 text-white" />
            </IconButton>
          </div>

          <MenuItem onClick={() => router.push("/")} title="home" />

          <MenuItem onClick={toggleAbout} title="About Us">
            {about ? <IoChevronUp /> : <IoChevronDown />}
          </MenuItem>
          <SubMenu open={about} links={aboutLinks} />

          <MenuItem onClick={toggleServices} title="Services">
            {services ? <IoChevronUp /> : <IoChevronDown />}
          </MenuItem>
          <SubMenu open={services} links={servicesLinks} />

          <MenuItem onClick={toggleTools} title="Research Tools">
            {tools ? <IoChevronUp /> : <IoChevronDown />}
          </MenuItem>
          <SubMenu open={tools} links={toolsLinks} />

          <MenuItem
            onClick={() => router.push("/articles-case-studies")}
            title="research articles and case studies"
          />

          <MenuItem
            onClick={() => router.push("/proposal")}
            title="request for proposal"
          />

          <MenuItem
            onClick={() => router.push("/contact-us")}
            title="contact us"
          />
        </List>
      </Drawer>
    </>
  );
};

export default Menu;
