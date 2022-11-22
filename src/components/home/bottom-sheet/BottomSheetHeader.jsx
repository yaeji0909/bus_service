import styled from "styled-components";
import media from "@lib/styles/media";
import MenuIcon from "@mui/icons-material/Menu";
const BottomSheetHeader = ({ onClick }) => (
  <Wrapper>
    <Header
      onClick={onClick}
      flex='0 0 auto'
      display='flex'
      alignitems='center'
      marginright={2}
      padding={2}
    >
      <MenuIcon style={{ color: "transparent" }} />
    </Header>
    <Title>즐겨찾기</Title>
  </Wrapper>
);

const Wrapper = styled.div`
  background-color: "#ffffff";
  height: 9vh;
  ${media.xlarge} {
    height: 10vh;
  }
`;

const Header = styled.div``;

const Title = styled.div`
  color: #3f4150;
  font-size: 20px;
  font-weight: 700;
  text-align: left;
`;

export default BottomSheetHeader;
