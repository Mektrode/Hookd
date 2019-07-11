import React, { useState, useContext } from "react";
import { StoreContext } from "../store";
import Timer from "../components/Timer";
import GameOver from "../components/GameOver";
import TargetMeter from "../components/TargetMeter";
import FX from "../components/FX";

/*
Components:-
- Countdown to start //not neccessary yet
- Timer
- Target/Current Number & % away
- Buttons Grid
- Gamer Over Pop-Up/Modal
*/

const defaultGame = {
  //Users starting number
  startnum: 2,

  //Time Given
  timeGiven: 60
};

const defaultEngine = {
  //Target Number
  target: null,

  //Is the countdown on?
  timerOn: false,

  //DOM will read this and logic will write to this variable
  currentNum: null,

  //DOM will read this and logic will write to this variable
  currentTime: null
};

export default function Game() {
  const { status } = useContext(StoreContext);

  const [gameSettings, setGameSettings] = useState(defaultGame);

  const [gameEngine, setGameEngine] = useState(defaultEngine);

  return (
    <div className="line main-comp">
      {status.username === "" ? (
        <h1>Onboard First Mate</h1>
      ) : (
        <h1>It's showtime {status.username}</h1>
      )}
      <Timer />
      <TargetMeter />
      <FX />
      <GameOver />
    </div>
  );
}
