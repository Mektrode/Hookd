import React from "react";
import highscores from "../lib/scores";
import "./../global.css";

const Score = props => {
  return (
    <div id="score-card">
      <br />
      Name : {props.name}
      <br />
      Accuracy : {props.accuracy}%
      <br />
      Date : {props.date}
    </div>
  );
};

export default function List() {
  return (
    <div className="main-comp line">
      <h3>Highscores:</h3>
      {highscores.scores.map(score => (
        <Score
          key={score.id}
          name={score.nameOfPlayer}
          accuracy={score.accuracy}
          date={score.date}
        />
      ))}
    </div>
  );
}
