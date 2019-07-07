import React, { useContext } from "react";
import { StoreContext } from "../store";
import Timer from "../components/Timer";
import GameOver from "../components/GameOver";
import TargetMeter from "../components/TargetMeter";

/*
Components:-
- Countdown to start //not neccessary yet
- Timer
- Target/Current Number & % away
- Buttons Grid
- Gamer Over Pop-Up/Modal
*/

const ButtonsGrid = () => {
  return (
    <div className="buttons-grid">
      <div className="buttons-container">
        <div className="b1">
          <button className="game-button">-1K</button>
        </div>
        <div className="b2">
          <button className="game-button">x2</button>
        </div>
        <div className="b3">
          <button className="game-button">+1K</button>
        </div>
        <div className="b4">
          <button className="game-button">-1</button>
        </div>
        <div className="b5">
          <button className="game-button">Square</button>
        </div>
        <div className="b6">
          <button className="game-button">+1</button>
        </div>
        <div className="b7">
          <button className="game-button">-10K</button>
        </div>
        <div className="b8">
          <button className="game-button">/2</button>
        </div>
        <div className="b9">
          <button className="game-button">+10K</button>
        </div>
        <div className="reset-div">
          <button className="game-button">RESET</button>
        </div>
        <div className="start-div">
          <button className="game-button">START</button>
        </div>
      </div>
    </div>
  );
};

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
      <ButtonsGrid />
      <GameOver />
    </div>
  );
}
