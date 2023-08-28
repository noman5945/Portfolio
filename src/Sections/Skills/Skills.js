import React from "react";
import cpp from "../../assets/logos/C++.png";
import java from "../../assets/logos/Java-logo.jpg";
import python from "../../assets/logos/python.png";
import SkillSections from "./SkillSections";

const Skills = () => {
  const languages = [
    {
      name: "C++",
      image: cpp,
    },
    {
      name: "Java",
      image: java,
    },
    {
      name: "Python",
      image: python,
    },
  ];

  const webDev = [
    {
      name: "HTML",
      image:
        "https://banner2.cleanpng.com/20190125/wpj/kisspng-computer-icons-html5-scalable-vector-graphics-port-socialpack-chocolate-icon-5c4b3bbcb7d671.680718971548434364753.jpg",
    },
    {
      name: "CSS",
      image:
        "https://w7.pngwing.com/pngs/696/424/png-transparent-logo-css-css3-thumbnail.png",
    },
    {
      name: "JavaScript",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
    },
  ];

  return (
    <div className=" relative top-[10%] mt-3 flex flex-col w-[100%] max-h-screen lg:h-screen  justify-center">
      <div className=" absolute flex flex-col justify-center top-[20%]  left-[15%] md:left-[10%] lg:left-[20%] ">
        <SkillSections
          sectName={"Programming Languages"}
          languages={languages}
        ></SkillSections>
        <SkillSections
          sectName={"Web Development"}
          languages={webDev}
        ></SkillSections>
      </div>
    </div>
  );
};

export default Skills;
