import React from "react";
import Items from "./Items";

const Navbar = () => {
  const sections = [
    { title: "Myself", link: "" },
    { title: "Skills", link: "" },
    { title: "Projects", link: "" },
    { title: "Education", link: "" },
    { title: "Contact", link: "" },
  ];
  return (
    <div className="">
      <ul className=" hidden lg:flex flex-row">
        {sections.map((section) => {
          return <Items options={section}></Items>;
        })}
      </ul>
    </div>
  );
};

export default Navbar;
