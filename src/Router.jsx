/**
 * Router.jsx
 */

import React from "react";
import { Routes, Route } from "react-router-dom";

// 인트로 화면
import Intro from "./components/Intro";
// 홈 화면
import Home from "./pages/Home";
// 작업물 페이지
import KoreanAir from "./pages/KoreanAir"; // 대한항공
import SKEcoplant from "./pages/SKEcoplant"; // sk에코플랜트
import KwangjuBank from "./pages/KwangjuBank"; // 광주은행
import CjFreshway from "./pages/CjFreshway"; // cj프레시웨이
import Fintech from "./pages/Fintech"; // 핀테크
import Payapp from "./pages/Payapp"; // 핀테크

function CommonRouter() {
  return (
    <>
      <Routes>
        <Route path="/intro" element={<Intro />} />
        <Route path="/" element={<Home />} />
        <Route path="/work/koreanair" element={<KoreanAir />} />
        <Route path="/work/skEcoplant" element={<SKEcoplant />} />
        <Route path="/work/kwangjuBank" element={<KwangjuBank />} />
        <Route path="/work/cjFreshway" element={<CjFreshway />} />
        <Route path="/work/fintech" element={<Fintech />} />
        <Route path="/work/payapp" element={<Payapp />} />
      </Routes>
    </>
  );
}

export default CommonRouter;
