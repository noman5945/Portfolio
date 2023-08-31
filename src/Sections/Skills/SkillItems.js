import React from "react";

const SkillItems = ({ skill }) => {
  const { image, name } = skill;
  return (
    <div className=" block">
      <img
        className=" shadow-lg rounded-md w-[280px] h-[280px]"
        src={image}
        alt={name}
      />
      <p className=" my-3 text-2xl text-center"> {name}</p>
    </div>
  );
};

export default SkillItems;
