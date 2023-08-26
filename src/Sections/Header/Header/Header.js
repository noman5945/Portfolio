import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import HeaderTitle from "./HeaderTitle";
import Hamburger from "../../../Icons/Hamburger/Hamburger";
import CloseIcon from "../../../Icons/CloseIcon/CloseIcon";

const Header = () => {
  const [navDisplay, setNavDisplay] = useState(false);
  const handleNavDisplay = () => {
    if (navDisplay) {
      setNavDisplay(false);
    } else {
      setNavDisplay(true);
    }
  };
  return (
    <div className=" my-5 flex flex-col lg:flex lg:flex-row lg:justify-between">
      <div className="flex flex-row justify-between items-center">
        <HeaderTitle></HeaderTitle>
        {navDisplay ? (
          <CloseIcon action={handleNavDisplay}></CloseIcon>
        ) : (
          <Hamburger action={handleNavDisplay}></Hamburger>
        )}
      </div>
      <Navbar displayState={navDisplay}></Navbar>
    </div>
  );
};

export default Header;
