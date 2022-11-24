import "react-spring-bottom-sheet/dist/style.css";
import { Helmet } from "react-helmet-async";
import { useQuery } from "react-query";
import { useEffect } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { getFavoriteList } from "@api/favoriteApi";
import { favBusStopList, userPid, selectedCity } from "@recoil/main";
import MainMap from "@components/base/map/MainMap";
import styled from "styled-components";
import MainResponsive from "@components/main/MainResponsive";
import React from "react";

const LargeSearchInput = React.lazy(() =>
  import("@components/search/LargeSearchInput.jsx")
);
const BottomSheetContainer = React.lazy(() =>
  import("@containers/home/BottomSheetContainer.jsx")
);

const MainPage = () => {
  const city = useRecoilValue(selectedCity);
  const pid = useRecoilValue(userPid);
  const setFavoriteBusStopList = useSetRecoilState(favBusStopList);

  const { data: favoriteList } = useQuery(["favoriteList", 1], () =>
    getFavoriteList(pid, city)
  );

  useEffect(() => {
    setFavoriteBusStopList(favoriteList);
    sessionStorage.removeItem("filtered_busStop");
    sessionStorage.removeItem("clicked_busStop");
  }, [favoriteList, city]);

  return (
    <Wrapper>
      <Helmet>
        <title>main page</title>
      </Helmet>
      <LargeSearchInput />
      <MainMap />
      <BottomSheetContainer />
    </Wrapper>
  );
};

const Wrapper = styled(MainResponsive)``;
export default MainPage;
