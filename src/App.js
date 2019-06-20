import React from "react";
import "./global.css";
import ScoreList from "./components/highscores";
import Onboarding from "./components/onboarding";
import { StoreContextProvider } from "./store";
import Game from "./components/game";
import ResetStatus from "./components/ResetStatus";

function App() {
  return (
    <div className="App">
      <StoreContextProvider>
        <ResetStatus />
        <Onboarding />
        <Game />
        <ScoreList />
      </StoreContextProvider>
    </div>
  );
}

export default App;
