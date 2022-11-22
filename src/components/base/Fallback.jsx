import styled from "styled-components";
import RotateLoader from "react-spinners/RotateLoader";

const Fallback = () => {
  return (
    <Wrapper>
      <div className='spinner'>
        <RotateLoader color={["#0051d9"]} />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .Wrapper {
    width: 100%;
    position: relative;
  }
  .spinner {
    width: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
  }
`;
export default Fallback;
