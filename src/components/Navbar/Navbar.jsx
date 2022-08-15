import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../images/logo.svg";
import hamburger from "../../images/icon-hamburger.svg";
import close from "../../images/icon-close-menu.svg";
import MobileMenu from "./MobileMenu";
import { useWindowSize } from "../../hooks/useWindowSize";
const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [width] = useWindowSize();
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <div className="navbar">
      <img src={logo} alt="crowd funding logo" title="crowd funding" />
      <div className="right">
        <div className="collapse">
          <button className="navlink right">About</button>
          <button className="navlink right">Discover</button>
          <button className="navlink right">Get&nbsp;Started</button>
        </div>
        <div className="mobile">
          <img
            onClick={toggleMenu}
            src={mobileMenu ? close : hamburger}
            alt="toggle mobile menu"
          />
        </div>
      </div>
      {mobileMenu && width < 900 && <MobileMenu />}
    </div>
  );
};

export default Navbar;
