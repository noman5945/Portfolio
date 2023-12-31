import React from "react";
import Items from "./Items";
import SwitchTheme from "../SwitchTheme/SwitchTheme";

const Navbar = ({ displayState }) => {
  const sections = [
    { title: "About", link: "#mySelf" },
    { title: "Skills", link: "#SkillsSection" },
    { title: "Services", link: "#services" },
    { title: "Projects", link: "#projects" },
    { title: "Contact", link: "#contact" },
  ];
  return (
    <nav
      className={
        "duration-300 lg:flex lg:flex-row " +
        (displayState ? "flex flex-col" : "hidden")
      }
    >
      <ul className=" flex flex-col my-3  lg:flex lg:flex-row lg:mx-3 ">
        {sections.map((section, index) => {
          return <Items key={index} options={section}></Items>;
        })}
        <SwitchTheme></SwitchTheme>
      </ul>
    </nav>
  );
};

export default Navbar;
