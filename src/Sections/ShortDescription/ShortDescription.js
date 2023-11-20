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
    <div className=" block max-h-screen lg:h-[650px] bg-orange-50">
      <div className=" container flex flex-col align-middle justify-center  mx-auto pt-[12%]">
        <p className=" text-center text-lg">Hi,I am Abdullah Al Noman</p>
        <p className=" text-center text-4xl font-bold">I am a Developer</p>
        <button
          onClick={() => downloadCV(url)}
          className=" my-2 btn btn-success w-40 mx-[45%] "
        >
          Download CV
        </button>
      </div>
    </div>
  );
};

export default ShortDescription;
