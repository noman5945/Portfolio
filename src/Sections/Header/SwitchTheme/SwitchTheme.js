import React, { useState } from "react";
import "./SwitchTheme.css";

const SwitchTheme = () => {
  const [darkTheme, setdarkTheme] = useState(false);
  const setDarkMode = () => {
    document.querySelector("html").setAttribute("data-theme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("html").setAttribute("data-theme", "light");
  };

  const handleToggle = (event) => {
    setdarkTheme(event.target.checked);
    if (!darkTheme) {
      setDarkMode();
    } else {
      setLightMode();
    }
  };
  return (
    <div className="mx-5 text-center flex flex-row">
      <p className=" mr-2">{darkTheme ? "Dark" : "Light"}</p>
      <input
        type="checkbox"
        id="toggle"
        className="checkbox"
        onChange={handleToggle}
      />
      <label htmlFor="toggle" className="switch"></label>
    </div>
  );
};

export default SwitchTheme;
