/**
 * Router.jsx
 */

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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
      {/* 페이지 전환 시 스크롤 맨 위로 이동 */}
      <ScrollTop />
      <Routes>
        {/* Main */}
        <Route path="/intro" element={<Intro />}></Route>
        {/* Intro */}
        <Route path="/" element={<Home />}></Route>
        {/* Sub page */}
        <Route path="/work/koreanair" element={<KoreanAir />}></Route>
      </Routes>
    </>
  );
}

export default CommonRouter;
