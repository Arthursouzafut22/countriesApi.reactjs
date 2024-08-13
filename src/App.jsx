import React from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import { GlobalData } from "./Hooks/UseContextApi";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardInfo from "./Components/CardInfo/CardInfo";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalData>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="country/:name" element={<CardInfo />} />
          </Routes>
        </GlobalData>
      </BrowserRouter>
    </>
  );
};

export default App;
