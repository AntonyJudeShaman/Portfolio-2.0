import React from "react";
import "./style.css";
import logo from "./log.svg";

function Preloader(props) {
  return (
    <>
      <div id={props.load ? "preloader" : "preloader-none"}>
        <img src={logo} alt="Logo" style={{ height: "60%", width: "60%" }} />
      </div>
    </>
  );
}

export default Preloader;
