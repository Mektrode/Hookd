import React, { useContext } from "react";
import { StoreContext } from "../store";
import "./../global.css";

export default function ResetStatus() {
  const { changeUsername } = useContext(StoreContext);

  const resetLocalStorage = () => {
    changeUsername("");
  };

  return (
    <div>
      <button className="btn2" onClick={resetLocalStorage}>
        Reset Local Storage
      </button>
    </div>
  );
}
