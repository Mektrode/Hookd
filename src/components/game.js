import React from "react";

/*
Components:-
- Countdown to start //not neccessary
- Timer
- Target/Current Number & % away
- Buttons Grid
- Gamer Over Pop-Up/Modal
*/

const Timer = () => {
  return (
    <div className="line timer">
      <span>01:00</span>
    </div>
  );
};

const ButtonsGrid = () => {
  return (
    <div className="buttons-grid">
      <div className="buttons-container">
        <div className="b1" />
        <div className="b2" />
        <div className="b3" />
        <div className="b4" />
        <div className="b5" />
        <div className="b6" />
        <div className="b7" />
        <div className="b8" />
        <div className="b9" />
        <div className="reset" />
      </div>
    </div>
  );
};

export default function Game() {
  return (
    <div className="line main-comp">
      <h1>Game</h1>
      <Timer />
      <ButtonsGrid />
    </div>
  );
}
