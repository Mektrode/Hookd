import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Container from "../components/Container";
import SpeedDial from "../components/SpeedDial";
import Header from "../components/Header";

import ScoreList from "./highscores";
import Game from "./game";
import Settings from "./Settings";
import Home from "./Home";

function Routes() {
  return (
    <Router>
      <Header />
      <Container>
        <Route exact path="/" component={Home} />
        <Route path="/game" component={Game} />
        <Route path="/scores" component={ScoreList} />
        <Route path="/settings" component={Settings} />
      </Container>
      <SpeedDial />
    </Router>
  );
}

export default Routes;
