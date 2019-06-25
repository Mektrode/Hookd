import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

function Header(props) {
  return (
    <Wrapper>
      <h3>{props.location.pathname}</h3>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 50px;
  background-color: #eee;
  margin-bottom: 10px;
  box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.2), 0 0px 20px 0 rgba(0, 0, 0, 0.19);

  h3 {
    text-align: center;
    padding-top: 10px;
  }
`;

export default withRouter(Header);
