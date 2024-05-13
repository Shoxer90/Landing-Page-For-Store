import React from "react";
import { Routes, Route } from "react-router-dom";


import { useTranslation } from "react-i18next";

import "./App.css";
import LandingPage from "./Landing";

const App = () => {
  const {t} = useTranslation();
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={ <LandingPage t={t} /> } />
        {/* <Route path="*" element={ <CvJs t={t} /> } /> */}
      </Routes> 
    </div>
  );
}

export default App;
