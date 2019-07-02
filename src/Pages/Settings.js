import React from "react";
import ResetStatus from "../components/ResetStatus";
import ChooseName from "../components/ChooseName";

function Settings() {
  return (
    <div>
      <h4>What would you like to change?</h4>
      <ResetStatus />

      <ChooseName />
    </div>
  );
}

export default Settings;
