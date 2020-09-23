import React from "react";
import Github from "../images/github.png";

function Topbar() {
  return (
    <div className="topbar">
      <a href="https://github.com/jhkette/jsarraymethods">
        <img src={Github} alt="Logo" />
      </a>
    </div>
  );
}

export default Topbar;
