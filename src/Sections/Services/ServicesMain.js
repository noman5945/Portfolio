import React from "react";
import ServiceItems from "./ServiceItems";

const ServicesMain = () => {
  const services = [
    {
      Title: "Front-End Development",
      Msg: " Armed with a solid foundation in web development technologies, I am eager to contribute my skills to create visually appealing and seamless interfaces.",
      img: "https://static.vecteezy.com/system/resources/previews/007/571/212/non_2x/frontend-development-line-icon-vector.jpg",
      style: {
        backgroundColor: "#FA8072",
        display: "flex",
        flexDirection: "row",
      },
    },
    {
      Title: "Back-End Development",
      Msg: "Proficient in backend development, I leverage the power of Node.js and .NET to build robust and scalable server-side solutions. With a keen eye for optimizing performance and ensuring seamless data flow, I bring a versatile skill set to deliver efficient and reliable backend functionalities.",
      img: "https://static.vecteezy.com/system/resources/previews/016/865/530/non_2x/backend-development-line-gradient-circle-background-icon-vector.jpg",
      style: {
        backgroundColor: "#FA8072",
        display: "flex",
        flexDirection: "row",
      },
    },
    {
      Title: "Communication and Colaboration",
      Msg: "Proficient in backend development, I leverage the power of Node.js and .NET to build robust and scalable server-side solutions. With a keen eye for optimizing performance and ensuring seamless data flow, I bring a versatile skill set to deliver efficient and reliable backend functionalities.",
      img: "https://static.vecteezy.com/system/resources/previews/015/600/206/non_2x/business-collaboration-icon-outline-style-vector.jpg",
      style: {
        backgroundColor: "#FA8072",
        display: "flex",
        flexDirection: "row",
      },
    },
    {
      Title: "Complete task within Deadline",
      Msg: "Proficient in backend development, I leverage the power of Node.js and .NET to build robust and scalable server-side solutions. With a keen eye for optimizing performance and ensuring seamless data flow, I bring a versatile skill set to deliver efficient and reliable backend functionalities.",
      img: "https://static.vecteezy.com/system/resources/previews/017/571/160/non_2x/calendar-icon-calendar-deadline-or-event-reminder-isolated-illustration-vector.jpg",
      style: {
        backgroundColor: "#FA8072",
        display: "flex",
        flexDirection: "row",
      },
    },
  ];

  return (
    <div
      id="services"
      className="flex flex-col justify-center align-middle h-screen bg-gradient-to-r from-cyan-500 to-blue-500"
    >
      <div className="  flex flex-col items-center h-1/2">
        <p className="text-3xl text-center my-2">What I can Do</p>
        <div className=" grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
          {services.map((service, index) => {
            return <ServiceItems key={index} item={service}></ServiceItems>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesMain;
