import { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { Map } from "react-kakao-maps-sdk";
import { MapMarker } from "react-kakao-maps-sdk";
import { getBusStopByLocation } from "@api/mapApi";
import EventMarker from "./EventMarker";
import PositionButton from "./PositionButton";
import userIcon from "@static/svg/user-position-icon.svg";

const MapContainer = () => {
  const [mapState, setMapState] = useState({
    center: { lat: 33.452613, lng: 126.570888 },
    isPanto: true,
  });
  const [station, setStation] = useState([]);
  const [markers, setMarkers] = useState([]);
  const [toggle, setToggle] = useState(false);
  const map = useRef();

  const { data: positionData } = useQuery(
    ["locations"],
    () => getBusStopByLocation(mapState.center.lat, mapState.center.lng),
    {
      enabled: mapState.center.lat !== 33.452613,
    }
  );

  const toggleHandler = (e) => {
    setToggle(!toggle);
  };
  // 현 위치 조회
  const getCurrentPos = () => {
    // navigator.geolocation.getCurrentPosition((position) => {
    //   console.log("get position");
    setMapState({
      // center: {
      //   lat: position.coords.latitude, // 위도
      //   lng: position.coords.longitude, // 경도
      // },
      center: {
        lat: "33.450701", // 위도
        lng: "126.570667", // 경도
      },
      isPanto: true,
    });
  };

  // const test = () => {
  //   setMapState({
  //     center: {
  //       lat: "33.5104135", // 위도
  //       lng: "126.4913534", // 경도
  //     },
  //     isPanto: true,
  //   });
  // };

  // response data를 마커객체로 수정
  const editDataToMarker = () => {
    if (station) {
      for (let {
        nodenm: name,
        gpslati: lat,
        gpslong: lng,
        nodeid: stopId,
      } of station) {
        let markerObj = {
          name,
          stopId,
          latlng: { lat, lng },
        };
        markers.push(markerObj);
      }
    }
    return markers;
  };

  useEffect(() => {
    getCurrentPos();
    if (positionData !== []) {
      setStation(positionData);
      setMarkers(editDataToMarker());
    }
  }, [positionData, station, markers]);

  return (
    <Map
      center={mapState.center}
      isPanto={mapState.isPanto}
      ref={map}
      style={{
        // 지도의 크기
        width: "100%",
        height: "100vh",
        zIndex: 1,
        position: "relative",
      }}
      level={4}
    >
      {markers.map((marker, index) => (
        <EventMarker
          key={index}
          position={marker.latlng}
          marker={marker}
          markers={markers}
        />
      ))}
      <MapMarker
        position={{
          lat: mapState.center.lat,
          lng: mapState.center.lng,
        }}
        image={{
          src: userIcon,
          size: {
            width: 90,
            height: 90,
          },
          options: {
            offset: {
              x: 10,
              y: 10,
            },
          },
        }}
      />
      <PositionButton toggleHandler={toggleHandler} toggle={toggle} />
    </Map>
  );
};

export default MapContainer;
