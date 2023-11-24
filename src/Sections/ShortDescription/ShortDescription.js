import React from "react";

const ShortDescription = () => {
  const url = "/CV/CV_ABDULLAH_AL_NOMAN.pdf";
  const downloadCV = (url) => {
    const filename = "CV_NOMAN.pdf";
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", filename);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <div className=" relative block max-h-screen lg:h-[800px] bg-orange-50 w-[100%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className=" container text-white text-center flex flex-col align-middle justify-center  mx-auto pt-[12%] p-5">
        <p className="  text-lg my-3">👋,I am Abdullah Al Noman</p>
        <p className="  text-5xl font-bold my-3">I am a Developer</p>
        <p className="  text-lg my-3">Based in Dhaka,Bangladesh</p>
        <button
          onClick={() => downloadCV(url)}
          className=" my-2 btn btn-success w-40 mx-[31%] lg:mx-[45%] "
        >
          Download CV
        </button>
      </div>
    </div>
  );
};

export default ShortDescription;
