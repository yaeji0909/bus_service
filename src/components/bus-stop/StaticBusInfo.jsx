import { useQuery } from "react-query";
import { getClickedBusInfo } from "@api/mapApi";
import Timer from "@components/home/utils/Timer";
import { BusInfoBox, LeftBox, BusBadge, BusList } from "./BusInfoStyle";

const StaticBusInfo = ({ busStop = [], clickedBusStation }) => {
  const { data: busArrivalInfo, isSuccess } = useQuery(
    ["busArrivalInfo", busStop.id || busStop.routeid],
    () => getClickedBusInfo(clickedBusStation.stopId, busStop.id),
    { enabled: (!!busStop.id || busStop.routeid) && !!clickedBusStation.stopId }
  );

  const editSecondsToMinutes = (time = []) => {
    const result = time / 60;
    return result;
  };

  const result = editSecondsToMinutes(busArrivalInfo?.arrtime);

  return (
    <>
      <BusInfoBox>
        <LeftBox>
          {busStop.ty || busStop.routetp === "간선버스" ? (
            <>
              <BusBadge style={{ backgroundColor: "#59BE0A" }}>
                <span>간선</span>
              </BusBadge>
              <BusList style={{ color: "#59BE0A" }}>
                {busStop.no || busStop.routeno}
              </BusList>
            </>
          ) : (
            <>
              <BusBadge style={{ backgroundColor: "#1E7ADB" }}>
                <span>급행</span>
              </BusBadge>
              <BusList style={{ color: "#1E7ADB" }}>
                {busStop.no || busStop.routeno}
              </BusList>
            </>
          )}
        </LeftBox>
        <Timer style={{ position: "absolute" }} mm={result} ss={0} />
      </BusInfoBox>
    </>
  );
};

export default StaticBusInfo;
