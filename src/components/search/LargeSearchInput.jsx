import SearchInput from "@components/search/SearchInput";
import styled from "styled-components";
import zIndexes from "@lib/styles/zIndexes";
import { Link } from "react-router-dom";
import media from "@lib/styles/media";

const StyledSearchInput = styled(SearchInput)`
  margin-top: 2rem;
  width: 88vw;
  margin-bottom: 0.5rem;
  height: 3rem;
  z-index: ${zIndexes.FloatButton};
  position: absolute;
  left: 5%;

  ${media.small} {
    width: 85vw;
  }
  ${media.medium} {
    width: 60vw;
    left: 20%;
    .hanmburger-btn {
      left: 1%;
    }
  }

  .hamburger-btn {
    fill: #191a20;
    position: absolute;
    width: 1.2rem;
    height: 2rem;
    left: 5%;
    top: 12%;
    z-index: ${zIndexes.FloatButton};
    ${media.small} {
      left: 2%;
    }
  }
`;

const LargeSearchInput = () => {
  return (
    <>
      <Link to='/search'>
        <StyledSearchInput large />
      </Link>
    </>
  );
};

export default LargeSearchInput;
