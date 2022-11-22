import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./App.css";
import Core from "@containers/base/Core";
import React, { Suspense, lazy } from "react";
import Fallback from "./components/base/Fallback";

// import ErrorBoundary from "./components/error/ErrorBoundary.jsx";

const HomePage = React.lazy(() => import("./pages/home/HomePage.jsx"));
const NotFound = React.lazy(() => import("./pages/NotFoundPage.jsx"));

const App = () => {
  return (
    <>
      {/* <ErrorBoundary> */}
      <Helmet>
        <title>Bus service</title>
        <meta name='description' content='실시간 버스 정보를 제공합니다.' />
      </Helmet>
      <Suspense fallback={<Fallback />}>
        <Router>
          <Routes>
            <Route path='/*' element={<HomePage />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
        <Core />
      </Suspense>
      {/* </ErrorBoundary> */}
    </>
  );
};
export default App;
