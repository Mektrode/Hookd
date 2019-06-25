import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const checkLocation = check => {
  switch (check) {
    case "/":
      return "Home";
      break;
    case "/game":
      return "Game";
      break;
    case "/scores":
      return "Highscores";
      break;
    default:
      break;
  }
};

function Header(props) {
  return (
    <Wrapper>
      <h3>{checkLocation(props.location.pathname)}</h3>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 50px;
  background-color: #eee;
  border-bottom: 1px solid grey;
  position: fixed;
  width: 100vw;
  h3 {
    text-align: center;
    padding-top: 10px;
  }
`;

export default withRouter(Header);
