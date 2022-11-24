import { Helmet } from "react-helmet-async";
import styled from "styled-components";
// import { MdOutlineArrowForwardIos } from "@react-icons/all-files/md/MdOutlineArrowForwardIos";
import Header from "@components/base/Header";
import { useState } from "react";
import SetRefreshTime from "./SetRefreshTime";
import SetLocation from "./SetLocation";

const menu = [
  {
    title: "서비스설정",
    content: ["자동 새로고침 간격", "지역설정"],
  },
  {
    title: "개인정보",
    content: ["위치 정보 이용동의"],
  },
  {
    title: "약관 및 항목",
    content: ["서비스 이용약관", "정보 제공처"],
  },
  {
    title: "고객지원",
    content: ["도움말"],
  },
];

const SettingsMenu = () => {
  const [clickedMenu, setClickedMenu] = useState([]);

  const handleClickEvent = (e) => {
    setClickedMenu(e.target.innerText);
  };

  if (clickedMenu === "자동 새로고침 간격") {
    return (
      <Wrapper>
        <Header title={"자동 새로고침 간격"} />
        <SetRefreshTime />
      </Wrapper>
    );
  } else if (clickedMenu === "지역설정") {
    return (
      <Wrapper>
        <Header title={"지역설정"} />
        <SetLocation />
      </Wrapper>
    );
  } else if (clickedMenu === "위치 정보 이용동의") {
    return (
      <Wrapper>
        <Header title={"위치 정보 이용동의"} />
      </Wrapper>
    );
  } else if (clickedMenu === "서비스 이용약관") {
    return (
      <Wrapper>
        <Header title={"서비스 이용약관"} />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Helmet>
        <title>Settings</title>
      </Helmet>
      <HeaderBox>
        <Header title={"설정"} />
      </HeaderBox>
      <SettingsMenuBox>
        <SettingsList>
          {menu.map((menu, index) => (
            <div key={index}>
              <SettingsMenuTitle>{menu.title}</SettingsMenuTitle>
              <SettingMenuContent onClick={handleClickEvent}>
                {menu.content[0]}
                {/* <MdOutlineArrowForwardIos /> */}
              </SettingMenuContent>
              {menu.content[1] ? (
                <SettingMenuContent onClick={handleClickEvent}>
                  {menu.content[1]}
                  {/* <MdOutlineArrowForwardIos /> */}
                </SettingMenuContent>
              ) : (
                ""
              )}
            </div>
          ))}
        </SettingsList>
      </SettingsMenuBox>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 100vh;
`;
const HeaderBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SettingsMenuBox = styled.ul``;
const SettingsList = styled.div``;
const SettingsMenuTitle = styled.div`
  background-color: #e0e2e7;
  padding: 0.1rem 0.8rem;
  color: #3f4150;
  font-size: 12px;
`;

const SettingMenuContent = styled.li`
  background-color: #ffffff;
  padding: 1.2rem;
  justify-content: space-between;
  display: flex;
  border-bottom: 1px solid #e0e2e7;
  svg {
    color: #8c8d96;
  }
`;
export default SettingsMenu;
