import React, { useContext } from "react";
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

export default function Game() {
  const { status } = useContext(StoreContext);
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
