import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { StoreContextProvider } from "./store";
import Onboarding from "./components/onboarding";
import ScoreList from "./components/highscores";
import Game from "./components/game";
import ResetStatus from "./components/ResetStatus";
import "./global.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <StoreContextProvider>
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={Onboarding} />
            <Route path="/game" component={Game} />
            <Route path="/scores" component={ScoreList} />
            <ResetStatus />
          </div>
        </Router>
      </StoreContextProvider>
    </div>
  );
}

export default App;
