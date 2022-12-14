import styled from "styled-components";
import { useLayoutEffect, useRef } from "react";
import { useQuery } from "react-query";
import { getFavoriteList } from "@api/favoriteApi";
import { useRecoilValue } from "recoil";
import { selectedCity, userPid } from "@recoil/main";
import { BottomSheetBodyBox, Wrapper } from "./bottomSheetStyles";
import useStayScrolled from "react-stay-scrolled";
import media from "@lib/styles/media";
import React from "react";
// import FavoriteList from "@components/favorites/FavoriteList";
import CachedIcon from "@mui/icons-material/Cached";
import exampleImg from "@static/images/favorites-example.png";
// import NorthIcon from "@mui/icons-material/North";

const FavoriteList = React.lazy(() =>
  import("@components/favorites/FavoriteList.jsx")
);

const BottomSheetBody = ({}) => {
  const city = useRecoilValue(selectedCity);
  const pid = useRecoilValue(userPid);
  const bottomBody = useRef(null);
  const { scrollBottom } = useStayScrolled(bottomBody);

  useLayoutEffect(() => {
    scrollBottom();
  }, [scrollBottom]);

  const { data: favoriteListData } = useQuery(["favoriteList"], () =>
    getFavoriteList(pid, city)
  );

  return (
    <Wrapper>
      <BottomSheetBodyBox ref={bottomBody}>
        {favoriteListData ? (
          <FavoriteList favoriteList={favoriteListData} />
        ) : (
          <ExampleImgBox>
            <img src={exampleImg} alt='example-img' />
            <p>
              다음 버스 도착시간까지 알고 싶다면
              <br />
              즐겨찾기를 추가해보세요
            </p>
          </ExampleImgBox>
        )}
        <ButtonBox>
          {/* <NorthIcon className='to-top-btn' /> */}
          <CachedIcon className='refresh-btn' />
        </ButtonBox>
      </BottomSheetBodyBox>
    </Wrapper>
  );
};

const ExampleImgBox = styled.div`
  width: 100%;
  padding: 5rem;
  p {
    font-size: 12px;
    color: #8c8d96;
    font-weight: 300;
    text-align: center;
  }
`;

const ButtonBox = styled.div`
  right: 5%;
  bottom: 14%;
  position: absolute;
  svg {
    border-radius: 50%;
    font-size: 3rem;
    padding: 0.8rem;
    display: flex;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
    justify-content: center;
    align-items: center;
    ${media.large} {
      width: 40%;
    }
  }
  .to-top-btn {
    background-color: #ffffff;
    color: #8c8d96;
    border: 1px solid #8c8d96;
  }
  .refresh-btn {
    margin-top: 0.5rem;
    background-color: #8c8d96;
    color: #ffffff;
  }
`;

export default BottomSheetBody;
