import React from "react";
import styled from "styled-components";

function Container(props) {
  return <Wrapper>{props.children}</Wrapper>;
}

const Wrapper = styled.div`
  color: grey; //test
`;
export default Container;
