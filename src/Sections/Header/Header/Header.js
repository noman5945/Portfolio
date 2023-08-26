import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import HeaderTitle from "./HeaderTitle";
import Hamburger from "../../../Icons/Hamburger/Hamburger";
import CloseIcon from "../../../Icons/CloseIcon/CloseIcon";

const Header = () => {
  const [navDisplay, setNavDisplay] = useState(true);
  const handleNavDisplay = () => {
    if (navDisplay) {
      setNavDisplay(false);
      document.querySelector("nav").setAttribute("className", "hidden");
    } else {
      setNavDisplay(true);
      document.querySelector("nav").setAttribute("className", "");
    }
  };
  return (
    <div className=" my-5 flex flex-col lg:flex lg:flex-row lg:justify-between">
      <div className="flex flex-row justify-between items-center">
        <HeaderTitle></HeaderTitle>
        {navDisplay ? (
          <Hamburger action={handleNavDisplay}></Hamburger>
        ) : (
          <CloseIcon action={handleNavDisplay}></CloseIcon>
        )}
      </div>
      <Navbar></Navbar>
    </div>
  );
};

export default Header;
