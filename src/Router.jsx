/**
 * Router.jsx
 */

import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { ScrollTop } from "./components";

// 인트로 화면
import Intro from "./components/Intro";
// 홈 화면
import Home from "./pages/Home";

// 서브 페이지
import KoreanAir from "./pages/KoreanAir";

function CommonRouter() {
  return (
    <>
      <BrowserRouter basename="/">
        {/* 페이지 전환 시 스크롤 항상 위로 가게 */}
        <ScrollTop />
        <Routes>
          <Route path="/intro" element={<Intro />} />
          <Route path="/" element={<Home />} />
          <Route path="/work/koreanair" element={<KoreanAir />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default CommonRouter;
