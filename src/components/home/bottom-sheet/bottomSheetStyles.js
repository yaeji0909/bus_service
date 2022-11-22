import styled, { css } from "styled-components";

export const solidPseudo = css`
  content: "";
  display: block;
`;
export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  flex: 1 1 auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const BottomSheetBodyBox = styled.div`
  ${flexColumn};
  flex-grow: 1;
  padding: 1rem;
  padding-bottom: 0;
  overflow-y: auto;

  &::before {
    ${solidPseudo};
    flex-grow: 1;
  }

  .MuiAvatar-root {
    height: 24px;
    width: 24px;
    margin-right: 8px;
  }

  .MuiTypography-root {
    margin-bottom: 16px;
    line-height: 24px;
  }
`;
