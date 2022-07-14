import React, { Component, useState } from "react";
import '../styles/App.css';
import SubmitButton from "./SubmitButton";
import SubHeading from "./SubHeading";
import InputQuery from "./InputQuery";
import Heading from "./Heading";


const App = () => {
  return (
    <div id="main">
      <Heading />
      <InputQuery />
      <SubHeading />
      <SubmitButton />
    </div>
  )
}
export default App;


