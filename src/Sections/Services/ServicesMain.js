import React from "react";
import ServiceItems from "./ServiceItems";

const ServicesMain = () => {
  const services = [
    {
      Title: "Front-End Development",
      Msg: " Armed with a solid foundation in web development technologies, I am eager to contribute my skills to create visually appealing and seamless interfaces.",
      img: "https://assets-global.website-files.com/5e4c6b4b7ed0a2e77458ce3d/638a92cf349604581a35fe75_263a75529a1752b75d64f9f21fd07c92-3-2.jpeg",
      style: {
        backgroundColor: "#F08080",
        display: "flex",
        flexDirection: "row",
      },
    },
    {
      Title: "Back-End Development",
      Msg: "Proficient in backend development, I leverage the power of Node.js and .NET to build robust and scalable server-side solutions. With a keen eye for optimizing performance and ensuring seamless data flow, I bring a versatile skill set to deliver efficient and reliable backend functionalities.",
      img: "https://plopdo.com/wp-content/uploads/2021/10/What-is-back-end-development-2.jpg",
      style: {
        backgroundColor: "#FA8072",
        display: "flex",
        flexDirection: "row-reverse",
      },
    },
  ];

  return (
    <div
      id="services"
      className="flex flex-col justify-center align-middle h-screen bg-gradient-to-r from-cyan-500 to-blue-500"
    >
      <div className=" m-[10%] block h-1/2">
        <p className="text-3xl text-center">What I can Do</p>
        {services.map((service, index) => {
          return <ServiceItems key={index} item={service}></ServiceItems>;
        })}
      </div>
    </div>
  );
};

export default ServicesMain;
