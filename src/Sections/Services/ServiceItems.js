import React from "react";

const ServiceItems = ({ item }) => {
  const { style, Title, Msg, img } = item;
  return (
    <div style={style} className=" my-5 h-1/2">
      <div className=" block">
        <p className=" text-2xl font-bold">{Title}</p>
        <p>{Msg}</p>
      </div>
      <div className="">
        <img className=" h-[100%] w-[100%]" src={img} alt=""></img>
      </div>
    </div>
  );
};

export default ServiceItems;
