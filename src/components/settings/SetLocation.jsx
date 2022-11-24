import ToggleSwitch from "../common/ToggleSwitch";
import styled from "styled-components";
import { useState, useEffect } from "react";
import CommonCheckBox from "./CommonCheckBox";
import { useRecoilState } from "recoil";
import { selectedCity } from "@recoil/main";

const cities = [
  { id: "서울", num: 0 },
  { id: "경기", num: 0 },
  { id: "제주", num: 39 },
  { id: "고양", num: 31100 },
];

const SetLocation = () => {
  const [autoSetting, setAutoSetting] = useState(false);
  const [selected, setSelected] = useRecoilState(selectedCity);

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  const selectHandler = (city) => {
    setSelected(city);
  };

  return (
    <>
      <AutoSetLocation>
        검색지역 자동설정
        <ToggleSwitch
          setAutoSetting={setAutoSetting}
          autoSetting={autoSetting}
        />
      </AutoSetLocation>
      {autoSetting
        ? cities.map((city, index) => (
            <CitiesBox key={index}>
              <p>{city.id}</p>
              <CommonCheckBox data={city} onSelect={selectHandler} />
            </CitiesBox>
          ))
        : ""}
    </>
  );
};

const AutoSetLocation = styled.div`
  padding: 1.3rem 1rem;
  display: flex;
  border-bottom: 1px solid #e0e2e7;
  justify-content: space-between;
`;

const CitiesBox = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e0e2e7;
  p {
    width: 2rem;
  }
`;

export default SetLocation;
