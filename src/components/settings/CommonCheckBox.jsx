import styled from "styled-components";

const CommonCheckBox = ({ data = [], onSelect }) => {
  // 체크박스 단일 선택
  const handleSingleCheck = (checked) => {
    if (checked == data.num) {
      onSelect(data);
    }
  };

  return (
    <Wrapper>
      <input
        type='checkbox'
        name={`${data.routeno}` || `${data.id}`}
        onChange={(e) => handleSingleCheck(e.currentTarget.name)}
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
