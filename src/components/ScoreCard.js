import React from "react";
import styled from "styled-components";

function ScoreCard(props) {
  return (
    <CardStyle>
      <GridNumber>{props.key}</GridNumber>
      <GridLeft>
        Name <br />
        {props.name}
      </GridLeft>
      <GridCentre>
        Accuracy <br /> {props.accuracy}%
      </GridCentre>
      <GridRight>
        When <br />
        {props.timestamp}
      </GridRight>
    </CardStyle>
  );
}

const CardStyle = styled.div`
  margin: 10px;
  display: grid;
  grid-template-columns: 0.4fr 1.2fr 1.2fr 1.2fr;
  grid-template-rows: 1fr;
  grid-template-areas: "number left center right";
`;

const GridNumber = styled.div`
  grid-area: number;
  text-align: center;
`;

const GridLeft = styled.div`
  grid-area: left;
  text-align: center;
`;

const GridCentre = styled.div`
  grid-area: center;
  text-align: center;
`;

const GridRight = styled.div`
  grid-area: right;
  text-align: center;
`;

export default ScoreCard;
