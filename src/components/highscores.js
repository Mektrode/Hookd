import React from "react";
import highscores from "../lib/scores";

export default function Test() {
  return (
    <div>
      <h3>Highscores:</h3>
      <div className="scores-card">
        <ul>
          <li>Name : {highscores.scores[1].nameOfPlayer}</li>
          <li>Accuracy : {highscores.scores[1].accuracy}%</li>
          <li>Date : {highscores.scores[1].date}</li>
        </ul>
      </div>
    </div>
  );
}
