import React from "react";
import mypic from "../../assets/rsz_mypic.jpeg";

const Myself = () => {
  const about_me =
    "Hello there, It's Adbullah Al Noman here.I am a passionate programmer who loves to develop web apps and learn new technologies.I can handle both frontend and backend development of a project also manage Database either its SQL/NoSQL.";
  return (
    <div
      id="mySelf"
      className=" max-h-screen w-[100%] mt-5  lg:h-screen flex justify-center"
    >
      {" "}
      <div className=" relative  mt-[25px] top-[35%] flex flex-col justify-center lg:flex-row-reverse">
        <div className=" mb-[50px]">
          <img
            className=" rounded-full mb-7 lg:mt-[-50px] h-[400px] w-[400px]"
            src={mypic}
            alt=""
          />
        </div>

        <div className=" w-[100%] lg:w-[35%] text-start">
          <p className=" text-3xl">Full Stack Web Developer here</p>
          <p className=" ">{about_me}</p>
        </div>
      </div>{" "}
    </div>
  );
};

export default Myself;
