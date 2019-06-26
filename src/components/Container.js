import React from "react";
import styled from "styled-components";

function Container({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  padding-top: 60px;
`;

export default Container;
