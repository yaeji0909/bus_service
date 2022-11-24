import "react-spring-bottom-sheet/dist/style.css";
import { Helmet } from "react-helmet-async";
import { useQuery } from "react-query";
import { useState, useRef, useEffect } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { getFavoriteList } from "@api/favoriteApi";
import { favBusStopList, userPid, selectedCity } from "@recoil/main";
import useDebounce from "@components/home/hooks/useDebounce";
import BottomSheetHeader from "@components/home/bottom-sheet/BottomSheetHeader";
import BottomSheetBody from "@components/home/bottom-sheet/BottomSheetBody";
import MainMap from "@components/base/map/MainMap";
import BottomSheetBodySkeleton from "@components/home/bottom-sheet/BottomSheetBodySkeleton";
import styled from "styled-components";
import MainResponsive from "@components/main/MainResponsive";
import React from "react";

const LargeSearchInput = React.lazy(() =>
  import("@components/search/LargeSearchInput.jsx")
);

function MainPage() {
  const [loadingOpen, setLoadingOpen] = useState(false);
  const city = useRecoilValue(selectedCity);
  const pid = useRecoilValue(userPid);
  const setFavoriteBusStopList = useSetRecoilState(favBusStopList);
  const sheetRef = useRef();
  const open = useDebounce(loadingOpen, 1000);
  const { data: favoriteList = "" } = useQuery(["favoriteList", 1], () =>
    getFavoriteList(pid, city)
  );

  const handleButtonSheet = () => {
    if (sheetRef.current.height > 120) {
      sheetRef.current.snapTo(({ snapPoints }) => snapPoints[0]);
    } else {
      sheetRef.current.snapTo(({ snapPoints }) => snapPoints[1]);
    }
  };

  useEffect(() => {
    setFavoriteBusStopList(favoriteList);
    sessionStorage.removeItem("filtered_busStop");
    sessionStorage.removeItem("clicked_busStop");
  }, [favoriteList]);

  return (
    <Wrapper>
      <Helmet>
        <title>main page</title>
      </Helmet>
      <LargeSearchInput />
      <MainMap />
      <BottomSheetWrapper>
        <BottomSheet
          open
          blocking={false}
          ref={sheetRef}
          scrollLocking={true}
          snapPoints={({ headerHeight, maxHeight }) => [
            headerHeight,
            (maxHeight - 56) * 0.65,
            maxHeight - 56,
          ]}
          onSpringStart={(event) =>
            event.type === "SNAP" && setLoadingOpen(true)
          }
          header={<BottomSheetHeader onClick={handleButtonSheet} />}
        >
          {open ? <BottomSheetBody /> : <BottomSheetBodySkeleton />}
        </BottomSheet>
      </BottomSheetWrapper>
    </Wrapper>
  );
}
const Wrapper = styled(MainResponsive)``;
const BottomSheetWrapper = styled.div``;
export default MainPage;
