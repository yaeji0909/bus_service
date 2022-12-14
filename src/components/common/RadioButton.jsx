import styled from "styled-components";
import { useState } from "react";
import zIndexes from "@lib/styles/zIndexes";

const RadioButtonGroup = ({ value }) => {
  const [select, setSelect] = useState("");
  const handleSelectChange = (event) => {
    const val = event.target.value;
    console.log(val);
    setSelect(val);
  };
  return (
    <>
      <Item>
        <RadioButton
          type='radio'
          name='radio'
          value={value}
          checked={select === value}
          onChange={(event) => handleSelectChange(event)}
        />
        <RadioButtonLabel />
      </Item>
    </>
  );
};

const Item = styled.div`
  display: flex;
  align-items: center;
  height: 5vh;
  position: relative;
`;

const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: white;
  border: 2px solid #bebebe;
`;

const RadioButton = styled.input`
  opacity: 0;
  z-index: ${zIndexes.FloatButton};
  margin-right: 10px;
  cursor: pointer;
  &:hover ~ ${RadioButtonLabel} {
    background: #eeeeee;
    &::after {
      content: "";
      border-radius: 50%;
      width: 12px;
      height: 12px;
    }
  }
  ${(props) =>
    props.checked &&
    ` 
    &:checked + ${RadioButtonLabel} {
      background: #ffffff;
      border: 2px solid #006FFD;
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 0.9rem;
        height: 0.85rem;
        margin: 3px;
        background: linear-gradient(180deg, #4C80F1 0%, #0051D9 100%);
      }
    }
  `}
`;

export default RadioButtonGroup;
