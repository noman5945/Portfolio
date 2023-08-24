import React from "react";

const Items = ({ options }) => {
  const { title, link } = options;
  return <li className=" mx-3">{title}</li>;
};

export default Items;
