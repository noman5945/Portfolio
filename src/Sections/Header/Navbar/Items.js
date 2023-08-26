import React from "react";

const Items = ({ options }) => {
  const { title, link } = options;
  return <li className=" m-2 lg:m-3">{title}</li>;
};

export default Items;
