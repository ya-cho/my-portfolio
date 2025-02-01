/**
 * Router.jsx
 */

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// 인트로 화면
import Intro from "./components/Intro";
// 홈 화면
import Home from "./pages/Home";

// 서브 페이지
import Page1 from "./pages/Page1";

function CommonRouter() {
  return (
    <Routes>
      {/* Main */}
      <Route path="/intro" element={<Intro />}></Route>
      {/* Intro */}
      <Route path="/" element={<Home />}></Route>
      {/* Sub page */}
      <Route path="/work/koreanair" element={<Page1 />}></Route>
    </Routes>
  );
}

export default CommonRouter;
