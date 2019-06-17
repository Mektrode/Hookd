import React from "react";
import "./global.css";
import ScoreList from "./components/highscores";
import Onboarding from "./components/onboarding";
//import Setup from "./components/setup";
import Game from "./components/game";

function App() {
  return (
    <div className="App">
      <Onboarding />
      <Game />
      <ScoreList />
    </div>
  );
}

export default App;
