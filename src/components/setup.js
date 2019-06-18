import React, { useState } from "react";
import "./../global.css";

//Future feature to be able to choose which function the user would like to take to the challenge
const PickButtons = () => {
  return (
    <div>
      <h3>Choose your functions wisely F(X)</h3>
    </div>
  );
};

export default function Setup() {
  //const [setupStatus, updateSetup] = useState([])
  return (
    <div className="line main-comp">
      <h1>Hello</h1>
      <PickName />
    </div>
  );
}
