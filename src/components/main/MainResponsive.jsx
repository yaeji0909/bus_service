import React from "react";
import styled from "styled-components";
import { mediaQuery } from "@lib/styles/media";

const MainResponsive = ({ className, children }) => {
  return <Block className={className}>{children}</Block>;
};

const Block = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100vw;
  ${mediaQuery(1200)} {
    width: 65vw;
  }
`;

export default MainResponsive;
