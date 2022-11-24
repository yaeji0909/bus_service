import React from "react";
import styled from "styled-components";
import { mediaQuery } from "@lib/styles/media";

function HomeLayout({ main }) {
  return (
    <Block>
      <Main>{main}</Main>
    </Block>
  );
}

const Block = styled.div`
  ${mediaQuery(768)} {
    margin-left: auto;
    margin-right: auto;
    width: 65vw;
  }
  height: 100vh;
`;
const Main = styled.main``;

export default HomeLayout;
