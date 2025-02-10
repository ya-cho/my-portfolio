/**
 * Router.jsx
 */

import React from "react";
import { Routes, Route } from "react-router-dom";

// 인트로 화면
import Intro from "./components/Intro";
// 홈 화면
import Home from "./pages/Home";
// 서브 페이지
import KoreanAir from "./pages/KoreanAir";
import SKEcoplant from "./pages/SKEcoplant";

function CommonRouter() {
  return (
    <>
      <Routes>
        <Route path="/intro" element={<Intro />} />
        <Route path="/" element={<Home />} />
        <Route path="/work/koreanair" element={<KoreanAir />} />
        <Route path="/work/skEcoplant" element={<SKEcoplant />} />
      </Routes>
    </>
  );
}

export default CommonRouter;
