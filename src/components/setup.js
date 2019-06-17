import React, { useState } from "react";
import "./../global.css";

const PickName = () => {
  const [username, setUsername] = useState("");

  const changeUsername = e => {
    e.preventDefault();
    console.log({ username });
    //Add to localStorage??
    setUsername("");
  };

  return (
    <div>
      <h3>What would you like to be called?</h3>
      <form onSubmit={changeUsername}>
        <input value={username} onChange={e => setUsername(e.target.value)} />
        <button>Next</button>
      </form>

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
  //const [setupStatus, updateSetup] = useState([])
  return (
    <div className="line main-comp">
      <h1>Hello</h1>
      <PickName />
    </div>
  );
}
