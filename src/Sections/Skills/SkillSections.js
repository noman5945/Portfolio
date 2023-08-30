import React from "react";
import SkillItems from "./SkillItems";

const SkillSections = ({ sectName, languages }) => {
  return (
    <div className=" flex flex-col my-7">
      <p className=" text-2xl lg:text-3xl my-5 text-center">{sectName}</p>
      <div className=" grid lg:grid-cols-3 grid-cols-1 justify-center lg:gap-6">
        {languages.map((language, index) => {
          return <SkillItems key={index} skill={language}></SkillItems>;
        })}
      </div>
    </div>
  );
};

export default SkillSections;
