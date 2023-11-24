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
    <div id="contact" className=" block max-h-[1120px] lg:h-screen">
      <div className=" flex flex-col items-center">
        <p className=" my-3 text-3xl">Connect With Me Directly</p>
        <div className=" my-12 lg:my-2 grid grid-cols-1 lg:grid-cols-2 lg:gap-3   gap-2  h-8">
          <input
            className=" input input-bordered w-full max-w-xs  bg-slate-300 focus:border-none"
            type="text"
            placeholder=" Your Name"
          />
          <input
            type="text"
            placeholder=" Email"
            className=" input input-bordered w-full max-w-xs bg-slate-300 focus:border-none"
          />
        </div>
        <div className=" max-w-fit my-7">
          <textarea
            rows={4}
            cols={40}
            className=" textarea textarea-bordered  textarea-lg w-full max-w-sm lg:max-w-[100%]   bg-slate-300"
            placeholder="Write something"
          ></textarea>
        </div>
        <button className=" btn btn-success">SEND</button>
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
