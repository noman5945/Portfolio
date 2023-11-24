import React from "react";

const SkillItems = ({ skill }) => {
  const { image, name } = skill;
  return (
    <div className="shadow-lg  flex flex-row m-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 p-2 hover:scale-110 transition-all ease-in-out rounded-md">
      <img
        className="  rounded-md w-[50px] h-[50px] mr-2"
        src={image}
        alt={name}
      />
      <p className=" my-3 text-2xl text-center cursor-default"> {name}</p>
    </div>
  );
};

export default SkillItems;
