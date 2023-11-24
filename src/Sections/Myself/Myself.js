import React from "react";
import mypic from "../../assets/myPic_res.jpg";

const Myself = () => {
  const about_me =
    "Hello there, It's Abdullah Al Noman here.I am a passionate programmer who loves to develop web apps and learn new technologies.I can handle both frontend and backend development of a project also manage Database either its SQL/NoSQL.";
  return (
    <div
      id="mySelf"
      className="  max-h-screen w-[100%] lg:h-screen block justify-center"
    >
      {" "}
      <div className="container mx-auto pt-[20%] lg:pt-[3%]  pb-5 p-5">
        <div className=" my-3 text-center">
          <p className=" text-4xl">About Myself</p>
        </div>
        <div className="  flex flex-col justify-center mt-[2%] lg:flex-row-reverse lg:items-center">
          <div className=" mb-[50px]">
            <img
              className=" shadow-md rounded-lg mb-7 mx-auto lg:mt-[50px] h-[500px] w-[400px] lg:h-[700px] lg:w-[500px]"
              src={mypic}
              alt=""
            />
          </div>

          <div className=" w-[100%] lg:w-[35%] text-start ">
            <p className=" text-4xl my-3">Full Stack Web Developer here</p>
            <p className=" text-base">{about_me}</p>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Myself;
