import React from "react";

const SwitchTheme = () => {
  const theme = "Light";
  return (
    <div className="switch mx-3">
      <label htmlFor="">
        <span className="slider">{theme}</span>
        <input type="checkbox" />
      </label>
    </div>
  );
};

export default SwitchTheme;
