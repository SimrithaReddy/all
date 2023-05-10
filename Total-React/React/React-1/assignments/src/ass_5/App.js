import React from "react";
// import "../styles/style.css"
import Welcome from "./Welcome";

const AppWelcome = () => {
  const name1 = ["Simmi"]
  return (
    <Welcome  name={name1[0]} />
  )
}


export default AppWelcome;