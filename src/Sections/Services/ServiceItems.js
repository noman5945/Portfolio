import React from "react";

const ServiceItems = ({ item }) => {
  const { style, Title, img } = item;
  return (
    <div style={style} className=" items-center flex flex-col p-3   rounded-md">
      <img
        className=" rounded-md h-[50px] w-[50px] lg:h-[100px] lg:w-[100px]"
        src={img}
        alt=""
      ></img>

      <div className=" block p-4">
        <p className="  text-base lg:text-lg font-bold">{Title}</p>
      </div>
    </div>
  );
};

export default ServiceItems;
