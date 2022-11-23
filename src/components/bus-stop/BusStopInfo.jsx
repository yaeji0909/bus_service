import styled from "styled-components";
import { useQuery } from "react-query";
import MapIcon from "@mui/icons-material/Map";
import BusInfo from "@components/bus-stop/BusInfo";
import { useNavigate } from "react-router-dom";
import { getBusStopInfo } from "@api/mapApi";
import CheckBox from "@components/common/CheckBox";
import { useState, useEffect } from "react";
import { useMutation } from "react-query";
import { addFavoriteList, deleteFavoriteList } from "@api/favoriteApi";
import { useRecoilState } from "recoil";
import { filteredBusStop } from "@recoil/favorites";
// import Toast from "@components/common/Toast";
import toast from "react-hot-toast";
import ActiveHeader from "@components/base/ActiveHeader";
import React from "react";
import {
  BusStopInfoBox,
  Wrapper,
  BusStopInfoTextBox,
  BusStopInfoText,
  MapBtn,
  HeaderBox,
  FavListBox,
} from "./BusStopInfoStyle";

const Toast = React.lazy(() => import("@components/common/Toast.jsx"));

const BusStopInfo = ({ list = [], type = [] }) => {
  const navigate = useNavigate();
  const [selectedBusList, setSelectedBusList] = useState([]);
  const [busListData, setBusListData] = useState([]);
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [filteredBusStation, setFilteredBusStation] =
    useRecoilState(filteredBusStop);

  // 즐겨찾기에서 접근시 실행되는 쿼리
  const { data: busListInFavorite = [] } = useQuery(
    ["route", list.station || filteredBusStation.station],
    () => getBusStopInfo(list.station || filteredBusStation.station),
    {
      enabled: !!list,
    }
  );

  // put / delete mutation query
  const putMutation = useMutation(() => {
    addFavoriteList(
      list.city || filteredBusStation.city,
      list.station || filteredBusStation.station,
      selectedBusList
    );
  });

  const deleteMutation = useMutation(() => {
    deleteFavoriteList();
  });

  useEffect(() => {
    if (busListInFavorite !== []) {
      const busListInFav = busListInFavorite?.map((el) => el);
      editBusObj(busListInFav);
    }
  }, [busListInFavorite]);

  const checkedItemHandler = (target, isChecked) => {
    if (isChecked) {
      checkedItems.add(target);
      setCheckedItems(checkedItems);
    } else if (!isChecked && checkedItems.has(target)) {
      checkedItems.delete(target);
      setCheckedItems(checkedItems);
    }
  };

  const getToast = () => {
    notify();
  };

  const addBusInFavList = () => {
    let busList = [];
    checkedItems.forEach((el) => busList.push(el.id));
    setSelectedBusList(busList);
    if (selectedBusList !== []) {
      setTimeout(() => {
        putMutation.mutate(
          list.city || filteredBusStation.city,
          list.station || filteredBusStation.station,
          selectedBusList
        );
      }, 5000);
    }
  };

  const editBusObj = (busObjInListArray) => {
    const busList = [];
    for (let {
      routeid: id,
      routeno: no,
      startnodenm: start,
      endnodenm: end,
      routetp: ty,
    } of busObjInListArray) {
      let busObj = {
        id,
        no: no.toString(),
        start,
        end,
        ty,
      };
      busList.push(busObj);
      setBusListData(busList);
    }
  };

  const notify = () =>
    toast("즐겨찾기가 수정되었습니다.", {
      iconTheme: {
        primary: "#000",
        secondary: "#fff",
      },
      // Aria
      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },
    });

  return (
    <>
      <HeaderBox>
        <ActiveHeader busStopInfo={list} />
      </HeaderBox>
      <BusStopInfoBox>
        <BusStopInfoTextBox>
          <BusStopInfoText>
            <Toast />
            <p>{list.name || filteredBusStation.name}</p>
          </BusStopInfoText>
          <MapBtn onClick={() => navigate(-1)}>
            <MapIcon />
          </MapBtn>
        </BusStopInfoTextBox>
        <Wrapper>
          <>
            {busListData &&
              busListData?.map((bus, index) => (
                <FavListBox key={index}>
                  <BusInfo
                    busStop={list.station || filteredBusStation.station}
                    list={bus}
                    type={type === "FAVORITE_LIST" ? type : ""}
                  />
                  <CheckBoxContents>
                    <CheckBox
                      getToast={getToast}
                      type={type === "FAVORITE_LIST" ? type : ""}
                      bus={bus}
                      checkedItemHandler={checkedItemHandler}
                      alreadySelectedBusList={
                        list.bus || filteredBusStation.bus
                      }
                      addBusInFavList={addBusInFavList}
                    />
                  </CheckBoxContents>
                </FavListBox>
              ))}
          </>
        </Wrapper>
      </BusStopInfoBox>
    </>
  );
};

const CheckBoxContents = styled.div``;

export default BusStopInfo;
