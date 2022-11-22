import { Helmet } from "react-helmet-async";
// import StaticBusStopInfo from "@components/bus-stop/StaticBusStopInfo";
import React from "react";
const StaticBusStopInfo = React.lazy(() =>
  import("@components/bus-stop/StaticBusStopInfo.jsx")
);

function BusStopInfoPage() {
  // 주변 정류소 클릭시

  return (
    <>
      <Helmet>
        <title>BusStopInfoPage</title>
      </Helmet>
      <StaticBusStopInfo />
    </>
  );
}

export default BusStopInfoPage;
