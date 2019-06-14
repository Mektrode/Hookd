import React from "react";
import "./global.css";
import ScoreList from "./components/highscores";
import Onboarding from "./components/onboarding";

function App() {
  return (
    <div className="App">
      <Onboarding />
      <ScoreList />
    </div>
  );
}

export default App;
