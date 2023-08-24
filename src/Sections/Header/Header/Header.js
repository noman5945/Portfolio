import React from "react";
import Navbar from "../Navbar/Navbar";
import HeaderTitle from "./HeaderTitle";
import SwitchTheme from "../SwitchTheme/SwitchTheme";

const Header = () => {
  return (
    <div className=" my-5 lg:flex lg:flex-row lg:justify-between">
      <HeaderTitle></HeaderTitle>
      <Navbar></Navbar>
      <SwitchTheme></SwitchTheme>
    </div>
  );
};

export default Header;
