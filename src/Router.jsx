import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// 레이아웃
import Home from "./pages/Home";

// 페이지
import Page1 from "./pages/Page1";

function CommonRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/page1" element={<Page1 />}></Route>
      // TODO: 404 처리 필요
      {/*<Route component={NotFound} />*/}
    </Routes>
  );
}

export default CommonRouter;
