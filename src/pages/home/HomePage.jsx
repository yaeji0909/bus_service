import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import MainResponsive from "@components/main/MainResponsive";
import HomeLayout from "@components/home/HomeLayout";
import MainTemplate from "@components/main/MainTemplate";
import BottomTab from "@components/common/BottomTab";

const HomePage = () => {
  const location = useLocation();

  const MainPage = React.lazy(() => import("./MainPage"));
  const SearchPage = React.lazy(() => import("./SearchPage"));
  const BusStopInfoPage = React.lazy(() => import("./BusStopInfoPage"));
  const EditFavListPage = React.lazy(() => import("./EditFavListPage"));
  const SettingPage = React.lazy(() => import("./SettingPage"));

  return (
    <MainTemplate>
      <MainResponsive>
        <HomeLayout
          main={
            <>
              <Suspense>
                <Routes location={location}>
                  <Route path='/' element={<Navigate replace to='home' />} />
                  <Route path='home' element={<MainPage />} />
                  <Route path='search' element={<SearchPage />} />
                  <Route path='bus-stop' element={<BusStopInfoPage />} />
                  <Route path='bus-edit' element={<EditFavListPage />} />
                  <Route path='settings' element={<SettingPage />} />
                </Routes>
              </Suspense>
              <BottomTab />
            </>
          }
        />
      </MainResponsive>
    </MainTemplate>
  );
};

export default HomePage;
