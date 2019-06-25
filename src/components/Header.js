import React from "react";
//import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <Wrapper>
      <h3>Title</h3>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 50px;
  background-color: #eee;
  margin-bottom: 10px;
  border-bottom: 1px solid black;
  h3 {
    text-align: center;
    padding-top: 10px;
  }
`;

export default Header;
