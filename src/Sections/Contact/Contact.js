import React from "react";
import Facebook from "../../Icons/Facebook/Facebook";
import SocialMedia from "./SocialMedia";
import LinkedIn from "../../Icons/LinkedIn/LinkedIn";
import LeetCode from "../../Icons/LeetCode/LeetCode";
import GithubIcon from "../../Icons/GithubIcon/GithubIcon";

const Contact = () => {
  const connects = [
    {
      platform: "Linked In",
      Icon: <LinkedIn></LinkedIn>,
      link: "https://www.linkedin.com/in/abdullah-al-noman-225680217",
    },
    {
      platform: "Facebook",
      Icon: <Facebook></Facebook>,
      link: "https://www.facebook.com/noman5945",
    },
    {
      platform: "Github",
      Icon: <GithubIcon></GithubIcon>,
      link: "https://github.com/noman5945",
    },
    {
      platform: "LeetCode",
      Icon: <LeetCode></LeetCode>,
      link: "https://leetcode.com/noman5945/",
    },
  ];
  return (
    <div
      id="contact"
      className=" block p-10 mx-6 max-h-[1120px] lg:h-[750px] lg:flex lg:flex-row lg:items-center lg:justify-center lg:mx-10"
    >
      <form className=" block bg-slate-100 p-4 w-[100%] lg:w-[30%]">
        <div className=" flex flex-col items-center p-3">
          <p className=" my-3 text-3xl">Get In Touch</p>
          <div className=" my-12 lg:my-2 grid grid-cols-1 lg:grid-cols-6 lg:gap-3  gap-2  h-8 ">
            <input
              className=" bg-inherit border-b border-teal-500 py-2 w-full text-gray-700 mr-3  px-2 leading-tight focus:outline-none lg:col-span-3"
              type="text"
              placeholder=" Your Name"
            />
            <input
              type="text"
              placeholder=" Email"
              className=" bg-inherit border-b border-teal-500 py-2 w-full max-w-fit text-gray-700 mr-3  px-2 leading-tight focus:outline-none lg:col-span-3"
            />
          </div>
          <div className=" max-w-full my-7">
            <textarea
              rows={4}
              cols={57}
              className="bg-inherit border-b border-teal-500 focus:outline-none w-[100%] lg:max-w-[100%]   "
              placeholder="Write something"
            ></textarea>
          </div>
          <button className=" btn btn-success">SEND</button>
        </div>
      </form>
      <div className=" flex flex-col items-center lg:p-4">
        <p className=" my-4 text-center text-3xl">
          Get Connected via Social Media
        </p>
        <div className=" grid grid-cols-1 lg:grid-cols-4 gap-3 items-center">
          {connects.map((connect, index) => {
            return <SocialMedia key={index} connect={connect}></SocialMedia>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
