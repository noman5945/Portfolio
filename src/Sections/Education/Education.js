import React from "react";
import EduItems from "./EduItems";
import uni_logo from "../../assets/institute/aust.png";
import college_logo from "../../assets/institute/college.png";
import school_logo from "../../assets/institute/DRMC.png";

const Education = () => {
  const eduInfo = [
    {
      degName: "Bachelors in Computer Science and Engineering",
      institute: "Ahsanullah University of Science and Technology",
      PassingYear: "2023",
      major: "Computer Science",
      inst_img: uni_logo,
    },
    {
      degName: "Higher Secondary School",
      institute: "M.K.C",
      PassingYear: "2018",
      major: "Science",
      inst_img: college_logo,
    },
    {
      degName: "Secondary School",
      institute: "Dhaka Residential Model College",
      PassingYear: "2016",
      major: "Science",
      inst_img: school_logo,
    },
  ];

  return (
    <div
      id="education"
      className="  relative flex flex-col items-center justify-center max-h-screen top-5 my-8 w-[100%] lg:h-screen p-3"
    >
      <p className=" text-3xl text-center">Education</p>
      <div className="  w-fit  flex flex-col justify-center">
        {eduInfo.map((eduInf, index) => {
          return <EduItems key={index} eduInfo={eduInf}></EduItems>;
        })}
      </div>
    </div>
  );
};

export default Education;
