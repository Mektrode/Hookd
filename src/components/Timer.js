import React from "react";
import styled from "styled-components";

function Timer() {
  return (
    <TimerWrapper>
      <span>01:00</span>
    </TimerWrapper>
  );
}

const TimerWrapper = styled.div`
  border: 1px solid black;
  text-align: center;
  font-family: "Courier New", Courier, monospace;
  font-weight: bolder;
  margin: 10px;
`;

export default Timer;
