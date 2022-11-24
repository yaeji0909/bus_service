import React from "react";
import styled from "styled-components";

const MainResponsive = ({ className, children }) => {
  return <Block className={className}>{children}</Block>;
};

const Block = styled.div`
  height: 100vh;
`;

export default MainResponsive;
