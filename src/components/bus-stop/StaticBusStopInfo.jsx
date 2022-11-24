import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Fragment } from "react";
import { getBusStopInfo } from "@api/mapApi";
import { useRecoilValue } from "recoil";
import { clickedBusStop } from "@recoil/main";
import StaticBusInfo from "./StaticBusInfo";
import MapIcon from "@mui/icons-material/Map";
import ActiveHeader from "@components/base/ActiveHeader";
import {
  BusStopInfoBox,
  Wrapper,
  BusStopInfoTextBox,
  BusStopInfoText,
  MapBtn,
  HeaderBox,
} from "./BusStopInfoStyle";
import { favBusStopList } from "@recoil/main";

const StaticBusStopInfo = () => {
  const navigate = useNavigate();
  const [busListData, setBusListData] = useState([]);
  const clickedBusStation = useRecoilValue(clickedBusStop);
  const favoriteBusStopList = useRecoilValue(favBusStopList);
  const [filteredBusStop, setFilteredBusStop] = useState([]);

  // 주변 정류소 클릭시
  const { data: busStopData } = useQuery(
    ["route", clickedBusStation.stopId],
    () => getBusStopInfo(clickedBusStation.stopId),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      staleTime: 5000,
      enabled: !!clickedBusStation,
    }
  );

  const editBusObj = (busListArray) => {
    const busList = [];
    for (let {
      routeid: id,
      routeno: no,
      startnodenm: start,
      endnodenm: end,
      routetp: ty,
    } of busListArray) {
      let busObj = {
        id,
        no: no.toString(),
        start,
        end,
        ty,
      };
      busList.push(busObj);
    }
    setBusListData(busList);
  };

  const filterBusStop = () => {
    favoriteBusStopList.map((busStop) =>
      busStop.station === clickedBusStation.stopId
        ? setFilteredBusStop(busStop)
        : ""
    );
  };

  useEffect(() => {
    if (busStopData && busStopData.length > 0) {
      const busObjList = busStopData?.map((el) => el);
      editBusObj(busObjList);
    }
    filterBusStop();
  }, [busStopData, filteredBusStop]);

  return (
    <>
      <HeaderBox>
        <ActiveHeader
          busStopInfo={clickedBusStation}
          isAlreadyInFavList={filteredBusStop}
        />
      </HeaderBox>
      <BusStopInfoBox>
        <BusStopInfoTextBox>
          <BusStopInfoText>
            <p>{clickedBusStation.name}</p>
          </BusStopInfoText>
          <MapBtn onClick={() => navigate(-1)}>
            <MapIcon />
          </MapBtn>
        </BusStopInfoTextBox>
        <Wrapper>
          {/* response가 하나일 경우 객체로, 여러개일 경우 array로 내려옴 */}
          {busListData !== [] && busListData.length === 0 ? (
            <StaticBusInfo
              busStop={busStopData}
              clickedBusStation={clickedBusStation}
            />
          ) : (
            <>
              {busListData !== [] &&
                busListData.length > 0 &&
                busListData.map((busStop) => (
                  <Fragment key={`${busStop.id}`}>
                    <StaticBusInfo
                      busStop={busStop}
                      clickedBusStation={clickedBusStation}
                    />
                  </Fragment>
                ))}
            </>
          )}
        </Wrapper>
      </BusStopInfoBox>
    </>
  );
};

export default StaticBusStopInfo;
