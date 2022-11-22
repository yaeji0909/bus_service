import styled from "styled-components";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";

const FavoriteStarIcon = ({ clickEventHandler, clickToggle }) => {
  const clickHandler = () => {
    clickEventHandler();
  };

  return (
    <Wrapper onClick={clickHandler}>
      {clickToggle ? (
        <StarIcon className='star-icon-active' />
      ) : (
        <StarOutlineIcon className='star-icon' />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .star-icon {
    color: #8c8d96;
    font-size: 1.6rem;
    &-active {
      font-size: 1.6rem;
      color: #f2e528;
      fill: #f2e528;
    }
  }
`;
export default FavoriteStarIcon;
