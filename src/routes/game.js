import React, { useReducer, useContext } from "react";
import { StoreContext } from "../store";
import Timer from "../components/Timer";
import GameOver from "../components/GameOver";
import TargetMeter from "../components/TargetMeter";
import FX from "../components/FX";
import * as maths from "../lib/maths";

//CHANGE TO STATE IF TO BE ADJUSTED IN SETTINGS BY PLAYER LATER
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

function engineReducer(state, action) {
  switch (action.type) {
    case "NEW TARGET":
      state.target = maths.getRandomNum(2, 999999);
      break;
    case "RESET TARGET":
      state.target = defaultEngine.target;
      break;
    default:
      throw new Error();
  }
}

export default function Game() {
  const { status } = useContext(StoreContext);
  const [gameEngine, setGameEngine] = useReducer(engineReducer, defaultEngine);

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
