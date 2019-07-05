import React from "react";
import styled from "styled-components";

const GameOver = props => {
  return (
    <OverWrapper>
      <h1>Times Up!!!</h1>
      <h3>Your score was:-</h3>
    </OverWrapper>
  );
};

const OverWrapper = styled.div`
  border: 1px solid black;
  width: 90%;
  margin-left: 5%;
  padding: 10px;
  margin-bottom: 10%;
`;

export default GameOver;
