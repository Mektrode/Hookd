import React, { useState, useContext } from "react";
import { StoreContext } from "./../store";
import "./../global.css";

const AddScoreTest = props => {
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

const Score = props => {
  return (
    <div id="score-card">
      <br />
      Name : {props.name}
      <br />
      Accuracy : {props.accuracy}%
      <br />
      Date : {props.timestamp}
    </div>
  );
};

export default function MyScoreList() {
  const { status, myscores } = useContext(StoreContext);
  return (
    <div className="main-comp line">
      <h2>Hey {status.username}, add a score</h2>
      <AddScoreTest />
      <h3>Highscores:</h3>
      {myscores.map(score => (
        <Score
          key={score.id}
          name={score.nameOfPlayer}
          accuracy={score.accuracy}
          timestamp={score.date}
        />
      ))}
    </div>
  );
}
