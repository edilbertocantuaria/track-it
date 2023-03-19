import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import useAppContext from '../hook/useAppContext'
import "react-circular-progressbar/dist/styles.css";

export default function ProgressBar(){
  const {percentage}  = useAppContext() 

  return (
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
  )
  }


