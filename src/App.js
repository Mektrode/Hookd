import React from "react";
import "./global.css";
import ScoreList from "./components/highscores";
import Onboarding from "./components/onboarding";
import Setup from "./components/setup";

function App() {
  return (
    <div className="App">
      <Onboarding />
      <Setup />
      <ScoreList />
    </div>
  );
}

export default App;
