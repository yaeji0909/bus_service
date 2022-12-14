import styled from "styled-components";
import MainResponsive from "@components/main/MainResponsive";

export const BusStopInfoBox = styled.div`
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #ffffff;
  }
  ::-webkit-scrollbar-thumb {
    background: #e0e0e0;
    border-radius: 10px;
    height: 15%;
  }
`;

export const BusStopInfoTextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 4px 4px -3px rgba(0, 0, 0, 0.15);
  padding: 2rem 0;
`;
export const BusStopInfoText = styled.div`
  font-size: 24px;
`;

export const MapBtn = styled.div`
  margin-top: 1rem;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid #e0e2e7;
  position: relative;
  svg {
    font-size: 0.8rem;
    position: absolute;
    left: 21%;
    top: 20%;
  }
`;
export const FavListBox = styled.div`
  position: relative;
`;

export const HeaderBox = styled(MainResponsive)`
  padding: 1rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    font-size: 1.3rem;
  }
`;
