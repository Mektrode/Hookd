import React from "react";
import "./../global.css";

//re-usable and will handle routing
const BackNext = () => {
  return (
    <div className="back-next">
      <button>Back</button>
      <button>Next</button>
    </div>
  );
};

const Welcome = () => {
  return (
    <div>
      <h1>Welcome to Hookd</h1>
      <p>Prepare to challenge your mental arithmatics and test your luck</p>
      <BackNext />
    </div>
  );
};

const Rules = () => {
  return (
    <div className="rules-card">
      <h3>Game Rules</h3>
      <ol className="rules">
        <li>You will be given a target between 1 and 1MIL</li>
        <li>You have 60 seconds to hit your target</li>
        <li>
          You MUST NOT go over more than double your Target or you will lose
        </li>
      </ol>
      <BackNext />
    </div>
  );
};

export default function onboarding() {
  return (
    <div className="line main-comp">
      <Welcome />
      <Rules />
      <button className="start">Start</button>
    </div>
  );
}
