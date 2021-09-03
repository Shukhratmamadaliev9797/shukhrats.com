import React, { useState } from "react";
import color from "../color.js";

export default function Setting() {
  const [showSetting, setShowSetting] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("");
  const [boxShadows, setBoxShadows] = useState("");

  const root = document.documentElement;
  root.style.setProperty("--background-color", backgroundColor);
  root.style.setProperty("--box-shadow", boxShadows);
  console.log();
  return (
    <div className={`setting setting-${showSetting ? "open" : "close"}`}>
      <div
        onClick={() => setShowSetting((prevCheck) => !prevCheck)}
        className="setting__icon"
      >
        <i class="fas fa-cog"></i>
      </div>
      <div className="setting__main">
        <div className="setting__background-title">Background theme</div>
        <div className="setting__background-colors">
          {color.backgroundColor.map((color) => {
            return (
              <div
                onClick={() => setBackgroundColor(color)}
                className="setting__background-colors-theme"
              ></div>
            );
          })}
        </div>
        <div className="setting__background-title">Box shadows</div>
        <div className="setting__boxShadows">
          {color.boxShadow.map((shadow) => {
            return (
              <div
                onClick={() => setBoxShadows(shadow)}
                className="setting__boxShadow"
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
