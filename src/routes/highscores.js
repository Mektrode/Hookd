import React, { useContext } from "react";
import { StoreContext } from "../store";
import "./../global.css";
import ScoreCard from "../components/ScoreCard";
import AddScore from "../components/AddScore";

function MyScoreList() {
  const { status, myscores } = useContext(StoreContext);
  return (
    <div className="main-comp line">
      <h2>Hey {status.username}, add a score</h2>
      <AddScore />
      <h3>Highscores:</h3>
      {myscores.length < 1 ? (
        <div id="score-card">No scores!!!</div>
      ) : (
        myscores.map(score => (
          <ScoreCard
            key={score.id}
            name={score.nameOfPlayer}
            accuracy={score.accuracy}
            timestamp={score.date}
          />
        ))
      )}
    </div>
  );
}

export default MyScoreList;
