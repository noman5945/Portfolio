import React from "react";
import Facebook from "../../Icons/Facebook/Facebook";
import SocialMedia from "./SocialMedia";
import LinkedIn from "../../Icons/LinkedIn/LinkedIn";
import Instagram from "../../Icons/Instagram/Instagram";
import LeetCode from "../../Icons/LeetCode/LeetCode";

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
      platform: "Instagram",
      Icon: <Instagram></Instagram>,
      link: "https://www.instagram.com/shinigami_ryuk_yagami/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D&fbclid=IwAR002vwV0Rmot0zpsluQCKujSr5ysIf5I2a6o57Lb3zWpIQQQQU9wadZ-nA",
    },
    {
      platform: "LeetCode",
      Icon: <LeetCode></LeetCode>,
      link: "https://leetcode.com/noman5945/",
    },
  ];
  return (
    <div id="contact" className=" block max-h-[1050px] lg:h-screen">
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
            className=" textarea textarea-bordered  textarea-lg w-full max-w-xs   bg-slate-300"
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
