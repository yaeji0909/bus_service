import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import { Link } from "react-router-dom";
import zIndexes from "@lib/styles/zIndexes";

const BottomTab = () => {
  return (
    <Block>
      <Link to='/search'>
        <LeftBox>
          <SearchIcon />
          <TextBox>최근 검색</TextBox>
        </LeftBox>
      </Link>
      <Link to='/home'>
        <Center>
          <DirectionsBusIcon />
        </Center>
      </Link>
      <Link to='/settings'>
        <>
          <SettingsIcon />
          <TextBox>설정</TextBox>
        </>
      </Link>
    </Block>
  );
};

const Block = styled.div`
  width: 100%;
  height: 4rem;
  position: fixed;
  bottom: 0%;
  left: 0%;
  display: flex;
  justify-content: space-around;
  z-index: ${zIndexes.BottomTab};
  padding: 0.8rem 2rem;
  background-color: #ffffff;
  color: #8c8d96;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.05);
  svg {
    font-size: 1.5rem;
  }
`;

const LeftBox = styled.div`
  svg {
    margin-left: 0.8rem;
  }
`;

const Center = styled.div`
  width: 3rem;
  height: 3rem;
  position: absolute;
  bottom: 50%;
  left: 44%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: linear-gradient(180deg, #4c80f1 0%, #0051d9 100%);
  svg {
    font-size: 2rem;
    color: #ffffff;
  }
`;

const TextBox = styled.p`
  font-size: 12px;
  font-weight: 300;
`;

export default BottomTab;
