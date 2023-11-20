import React from "react";
import "./Item.css";

const Items = ({ options }) => {
  const { title, link } = options;
  return (
    <li className=" font-semibold font-sans m-2  text-xl  lg:m-3">
      <a id="navLinks" href={link} className=" relative">
        {" "}
        {title}
      </a>
    </li>
  );
};

export default Items;
