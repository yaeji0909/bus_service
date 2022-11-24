import styled from "styled-components";
import useToggle from "@lib/hooks/useToggle";
import { useEffect } from "react";

const CommonCheckBox = ({ data = [], onSelect }) => {
  // 체크박스 단일 선택
  const [clickToggle, setClickToggle] = useToggle(false);

  const handleSingleCheck = () => {
    setClickToggle(!clickToggle);
    onSelect(data.num);
  };

  useEffect(() => {
    console.log(clickToggle);
  }, [clickToggle]);
  return (
    <Wrapper>
      <input
        type='checkbox'
        name={`${data.station}` || `${data.id}`}
        onChange={handleSingleCheck}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-block;
  input {
    width: 1rem;
    height: 1rem;
  }
`;
export default CommonCheckBox;
