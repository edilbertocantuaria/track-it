import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage = 66;

const ProgressBar = () => (
    <CircularProgressbar
      value={percentage}
      text="Hoje"
      background
      backgroundPadding={6}
      styles={buildStyles({
        backgroundColor: "#52B6FF",
        textColor: "#fff",
        pathColor: "#fff",
        trailColor: "transparent"
        
      })}
    /> 
);



export default ProgressBar;