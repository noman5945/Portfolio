import React from "react";

const EduItems = ({ eduInfo }) => {
  const { degName, institute, PassingYear, major, inst_img } = eduInfo;
  return (
    <div className=" bg-slate-200 text-black flex flex-row my-5 shadow-lg align-top p-3 rounded-lg">
      <img src={inst_img} alt="" className=" w-[100px] h-[120px] rounded-lg" />
      <div className=" mx-3 inline-block">
        <p>
          <span className=" font-bold">Degree:</span> {degName}
        </p>
        <p>
          {" "}
          <span className=" font-bold">Institute:</span> {institute}
        </p>
        <p>
          {" "}
          <span className=" font-bold"> Passing Year:</span> {PassingYear}
        </p>
        <p>
          <span className=" font-bold">Major:</span> {major}
        </p>
      </div>
    </div>
  );
};

export default EduItems;
