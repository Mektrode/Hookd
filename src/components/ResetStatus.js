import React, { useContext } from "react";
import { StoreContext } from "../store";
import "./../global.css";

export default function ResetStatus() {
  const { clearLocalStorage } = useContext(StoreContext);

  return (
    <div>
      <button className="btn2" onClick={clearLocalStorage}>
        Clear Local Storage
      </button>
    </div>
  );
}
