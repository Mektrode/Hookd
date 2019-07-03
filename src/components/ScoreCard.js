import React from "react";
import styled from "styled-components";

function ScoreCard(props) {
  return (
    <CardStyle>
      <br />
      Name : {props.name}
      <br />
      Accuracy : {props.accuracy}%
      <br />
      Date : {props.timestamp}
    </CardStyle>
  );
}

const CardStyle = styled.div`
  color: purple;
`;
export default ScoreCard;
