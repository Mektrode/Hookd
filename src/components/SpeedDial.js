import React from "react";
import styled from "styled-components";

function SpeedDial() {
  return (
    <Wrapper>
      <h5>Test</h5>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid black;
  width: 50px;
  height: 50px;
  position: fixed;
  top: 90vh;
  left: 80vw;
  text-align: center;
`;

export default SpeedDial;
