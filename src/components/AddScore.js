import React, { useState, useContext } from "react";
import { StoreContext } from "../store";
import "./../global.css";

const AddScore = props => {
  const { newScore } = useContext(StoreContext);
  const [acc, setacc] = useState("");
  const [stampTime, setstampTime] = useState("");

  const handleAccChange = e => {
    setacc(e.target.value);
  };

  const handleTimeChange = e => {
    setstampTime(e.target.value);
  };

  const submitScore = e => {
    e.preventDefault();
    console.log(
      `Got the value ${acc} and the value ${stampTime} for the Timestamp`
    );
    newScore(acc, stampTime);
    setacc("");
    setstampTime("");
  };

  return (
    <div>
      <form>
        Accuracy: <input type="text" value={acc} onChange={handleAccChange} />
        Timestamp:{" "}
        <input type="text" value={stampTime} onChange={handleTimeChange} />
        <button className="btn1" onClick={e => submitScore(e)}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddScore;
