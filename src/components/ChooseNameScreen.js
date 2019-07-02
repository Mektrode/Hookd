import React, { useState, useContext } from "react";
import { StoreContext } from "./../store";
import ChooseName from "./ChooseName";

function ChooseNameScreen() {
  const { changeUsername } = useContext(StoreContext);
  return (
    <div>
      <h3 className="text-title">What would you like to be called?</h3>
      <ChooseName />
      <button className="btn2" onClick={() => changeUsername("Guest")}>
        Guest Mode
      </button>
    </div>
  );
}

export default ChooseNameScreen;
