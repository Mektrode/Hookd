import React from "react";
import highscores from "../lib/scores";

export default function Test() {
  return (
    <div>
      <h3>Highscores:</h3>
      {highscores.scores.map(score => (
        <li>
          <br />
          Name : {score.nameOfPlayer}
          <br />
          Accuracy : {score.accuracy}%
          <br />
          Date : {score.date}
        </li>
      ))}
    </div>
  );
}
