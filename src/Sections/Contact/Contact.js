import React from "react";

const Contact = () => {
  return (
    <div className=" block max-h-screen lg:h-screen">
      <div className=" flex flex-col items-center">
        <div className=" grid grid-cols-1 lg:grid-cols-2 lg:gap-3   h-8">
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
        <div className=" my-7">
          <textarea
            className="textarea textarea-bordered"
            placeholder="Bio"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Contact;
