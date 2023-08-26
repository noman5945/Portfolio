import React from "react";
import Items from "./Items";
import SwitchTheme from "../SwitchTheme/SwitchTheme";

const Navbar = () => {
  const sections = [
    { title: "Myself", link: "" },
    { title: "Skills", link: "" },
    { title: "Projects", link: "" },
    { title: "Education", link: "" },
    { title: "Contact", link: "" },
  ];
  return (
    <nav>
      <ul className=" flex flex-col my-3 lg:flex lg:flex-row lg:mx-3">
        {sections.map((section, index) => {
          return <Items key={index} options={section}></Items>;
        })}
        <SwitchTheme></SwitchTheme>
      </ul>
    </nav>
  );
};

export default Navbar;
