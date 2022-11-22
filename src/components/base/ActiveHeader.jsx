import styled from "styled-components";
import Header from "./Header";
import FavoriteStarIcon from "@components/common/FavoriteStarIcon";
import { useMutation } from "react-query";
import { addFavoriteList, deleteFavoriteList } from "@api/favoriteApi";
import { useRecoilValue } from "recoil";
import { selectedCity } from "@recoil/map";
import useToggle from "@lib/hooks/useToggle";
import { favBusStopList } from "@recoil/favorites";
import { useEffect } from "react";

const ActiveHeader = ({ busStopInfo }) => {
  const [clickToggle, setClickToggle] = useToggle(false);
  const city = useRecoilValue(selectedCity);
  const favoriteBusStopList = useRecoilValue(favBusStopList);

  //   const filterDefaultList = () => {
  //     if (favoriteBusStopList.map((e) => e.station === busStopInfo.stopId))
  //       setClickToggle(true);
  //   };

  //   useEffect(() => {
  //     filterDefaultList();
  //   }, []);

  const clickEventHandler = () => {
    setClickToggle(!clickToggle);
    if (clickToggle === false) {
      putMutation.mutate(city, busStopInfo.stopId);
    } else if (!clickToggle === true) {
      deleteMutation.mutate(city, busStopInfo.stopId);
    }
  };

  const putMutation = useMutation(() => {
    addFavoriteList(city, busStopInfo.stopId);
  });

  const deleteMutation = useMutation(() => {
    deleteFavoriteList(city, busStopInfo.stopId);
  });

  return (
    <>
      <Block></Block>
      <IconBox>
        <FavoriteStarIcon
          clickEventHandler={clickEventHandler}
          clickToggle={clickToggle}
        />
      </IconBox>
    </>
  );
};

const Block = styled(Header)``;
const IconBox = styled.div``;
export default ActiveHeader;
