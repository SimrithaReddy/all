import React, { Component, useState } from "react";
import MFC from './Heading';
import Input from './InputQuery';
import Sub from './SubHeading';
import Submit from './SubmitButton';
import '../styles/App.css';
// import Heading from "./Heading";

const App = () => {
  return (
    <div id="main">
      <MFC/>
      <Input/>
      <Sub/>
      <Submit/>
    </div>
  )
};

export default App;
