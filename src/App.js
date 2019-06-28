import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { StoreContextProvider } from "./store";
import Onboarding from "./Pages/onboarding";
import ScoreList from "./components/highscores";
import Game from "./components/game";
import ResetStatus from "./components/ResetStatus";
import "./global.css";
import Container from "./components/Container";
import SpeedDial from "./components/SpeedDial";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <StoreContextProvider>
        <Router>
          <div>
            <Header />
            <Container>
              <Route exact path="/" component={Onboarding} />
              <Route path="/game" component={Game} />
              <Route path="/scores" component={ScoreList} />
            </Container>
            <SpeedDial />
          </div>
        </Router>
      </StoreContextProvider>
    </div>
  );
}

export default App;
