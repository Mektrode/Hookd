import React from "react";
import styled from "styled-components";

const FX = () => {
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

export default FX;
