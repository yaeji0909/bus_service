import { useQuery } from "react-query";
import { getClickedBusInfo } from "@api/mapApi";
import Timer from "@components/home/utils/Timer";
import { BusInfoBox, LeftBox, BusBadge, BusList } from "./BusInfoStyle";

const BusInfo = ({ list, busStop, type }) => {
  const { data: busArrival = [] } = useQuery(
    ["busArrival", list.no],
    () => getClickedBusInfo(busStop, list.id),
    { enabled: !!busStop !== [] && !!list.id !== [] }
  );

  const editSecondsToMinutes = (time = []) => {
    const result = time / 60;
    return result;
  };

  const result = editSecondsToMinutes(busArrival.arrtime);

  return (
    <>
      {busArrival ? (
        <BusInfoBox>
          <LeftBox>
            {list.ty === "간선버스" ? (
              <>
                <BusBadge style={{ backgroundColor: "#59BE0A" }}>
                  <span>간선</span>
                </BusBadge>
                <BusList style={{ color: "#59BE0A" }}>{list.no}</BusList>
              </>
            ) : (
              <>
                <BusBadge style={{ backgroundColor: "#1E7ADB" }}>
                  <span>급행</span>
                </BusBadge>
                <BusList style={{ color: "#1E7ADB" }}>{list.no}</BusList>
              </>
            )}
          </LeftBox>
          {type !== "" && (
            <Timer style={{ position: "absolute" }} mm={result} ss={0} />
          )}
        </BusInfoBox>
      ) : (
        ""
      )}
    </>
  );
};

export default BusInfo;
