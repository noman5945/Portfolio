import React from "react";
import cpp from "../../assets/logos/C++.png";
import java from "../../assets/logos/Java-logo.jpg";
import python from "../../assets/logos/python.png";
import SkillSections from "./SkillSections";

const Skills = () => {
  const languages = [
    {
      name: "C++",
      image: cpp,
    },
    {
      name: "Java",
      image: java,
    },
    {
      name: "Python",
      image: python,
    },
  ];

  const webDev = [
    {
      name: "HTML",
      image:
        "https://global-uploads.webflow.com/6310623137560b46de28b2a7/632f2b02d726c76816bda82d_html.png",
    },
    {
      name: "CSS",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2_V6ES68apUcBSJhKbCNEkhdLy2ZenjMUB6WTKyzeanlFuGkTpSBell8SPUoL5COxwBc&usqp=CAU",
    },
    {
      name: "JavaScript",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
    },
    {
      name: "PHP",
      image: "https://www.svgrepo.com/show/452088/php.svg",
    },
    {
      name: "ReactJS",
      image:
        "https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png",
    },
    {
      name: "Tailwind CSS",
      image:
        "https://ph-files.imgix.net/829bdf09-bf73-4976-ae80-8eb1ec6b455d.png?auto=format",
    },
    {
      name: "Bootstrap CSS",
      image:
        "https://img.freepik.com/premium-vector/bootstrap-icon-b-letter-logo_781017-7.jpg",
    },
    {
      name: "Node.js",
      image:
        "https://ih1.redbubble.net/image.367014180.4385/st,small,507x507-pad,600x600,f8f8f8.u3.jpg",
    },
    {
      name: "Django",
      image:
        "https://image.spreadshirtmedia.com/image-server/v1/mp/products/T1459A839PA3861PT28D1007202637W10000H3483/views/1,width=800,height=800,appearanceId=839,backgroundColor=F2F2F2/django-logo-sticker.jpg",
    },
  ];

  const database = [
    {
      name: "MongoDB",
      image:
        "https://findlogovector.com/wp-content/uploads/2022/04/mongodb-logo-vector-2022.png",
    },
    {
      name: "MSSQL",
      image:
        "https://logowik.com/content/uploads/images/microsoft-sql-server4529.jpg",
    },
    {
      name: "Oracle",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Oracle_Logo.svg/640px-Oracle_Logo.svg.png",
    },
  ];

  return (
    <div
      id="SkillsSection"
      className=" relative top-[10%] mt-3  flex  flex-col flex-auto w-[100%] h-[5490px]  lg:h-[135rem] items-center justify-center"
    >
      <div className=" absolute flex flex-col justify-center top-[2%]  left-[15%] md:left-[10%] lg:left-[20%] ">
        <SkillSections
          sectName={"Programming Languages"}
          languages={languages}
        ></SkillSections>
        <SkillSections
          sectName={"Web Development"}
          languages={webDev}
        ></SkillSections>
        <SkillSections
          sectName={"Database"}
          languages={database}
        ></SkillSections>
      </div>
    </div>
  );
};

export default Skills;
