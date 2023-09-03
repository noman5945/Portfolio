import React from "react";

const SocialMedia = ({ connect }) => {
  const { platform, Icon, link } = connect;
  return (
    <div className=" block">
      <a href={link}>
        <div>{Icon}</div>
      </a>
      <p className=" text-center">{platform}</p>
    </div>
  );
};

export default SocialMedia;
