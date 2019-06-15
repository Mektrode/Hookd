import React from "react";
import "./../global.css";

const PickName = () => {
  return (
    <div>
      <h3>What would you like to be called?</h3>
      <input />
      <button>Next</button>
      <br />
      <br />
      <button>Start as Guest</button>
    </div>
  );
};

/*
Future feature to be able to choose which buttons the user would like to take to the challenge
const PickButtons = () => {
  return (
    <div>
      <h3>Choose your buttons wisely</h3>
    </div>
  );
};
*/

export default function Setup() {
  return (
    <div className="line main-comp">
      <PickName />
    </div>
  );
}
