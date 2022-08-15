import React from "react";
import "./MobileMenu.css";

const MobileMenu = () => {
  return (
    <div className="mobile-menu">
      <button className="mobile-navlink">About</button>
      <button className="mobile-navlink">Discover</button>
      <button className="mobile-navlink">Get Started</button>
    </div>
  );
};

export default MobileMenu;
