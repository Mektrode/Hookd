import React from "react";
import "./../global.css";

const PickName = () => {
  return (
    <div>
      <h3>What would you like to be called?</h3>
      <input />
      <button>Next</button>
    </div>
  );
};

export default function setup() {
  return (
    <div className="line onboarding">
      <PickName />
    </div>
  );
}
