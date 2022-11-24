import styled from "styled-components";
import Header from "./Header";
import FavoriteStarIcon from "@components/common/FavoriteStarIcon";
import { useMutation } from "react-query";
import { addFavoriteList, deleteFavoriteList } from "@api/favoriteApi";
import { useRecoilValue } from "recoil";
import { selectedCity } from "@recoil/main";
import useToggle from "@lib/hooks/useToggle";
import { useEffect } from "react";

const ActiveHeader = ({ busStopInfo, isAlreadyInFavList }) => {
  const [clickToggle, setClickToggle] = useToggle(false);
  const city = useRecoilValue(selectedCity);

  const clickEventHandler = () => {
    setClickToggle(!clickToggle);
    if (clickToggle === false) {
      putMutation.mutate(city, busStopInfo.stopId);
    } else if (clickToggle === true) {
      deleteMutation.mutate(city, busStopInfo.stopId);
    }
  };

  useEffect(() => {
    if (busStopInfo.name === isAlreadyInFavList.name) {
      setClickToggle(true);
    }
  }, [isAlreadyInFavList]);

  const putMutation = useMutation(() => {
    addFavoriteList(city, busStopInfo.stopId || busStopInfo.station);
  });

  const deleteMutation = useMutation(() => {
    deleteFavoriteList(city, busStopInfo.stopId || busStopInfo.station);
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
