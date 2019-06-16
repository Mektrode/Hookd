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

function GameOver() {
  return (
    <div className="line main-comp">
      <h1>Times Up!!!</h1>
      <h3>Your score was:-</h3>
    </div>
  );
}

const Meter = () => {
  return (
    <div className="meter-grid line timer">
      <div className="meter-container">
        <div className="meter1">Target: 12189384123</div>
        <div className="meter2">34%</div>
        <div className="meter3">You: 190814</div>
      </div>
    </div>
  );
};

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
        <div className="reset">
          <button className="game-button">RESET</button>
        </div>
      </div>
    </div>
  );
};

export default function Game() {
  return (
    <div className="line main-comp">
      <h1>Game</h1>
      <Timer />
      <Meter />
      <ButtonsGrid />
      <GameOver />
    </div>
  );
}
