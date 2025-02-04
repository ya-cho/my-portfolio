/**
 * App.jsx
 * © 2025 yoona. All rights reserved.
 */

import React, { useEffect, useState } from "react";
import "./assets/scss/global.scss";
import Router from "./Router";
import { LenisProvider } from "./context/LenisContext";
import { CustomCursor } from "./components";

function App() {
  // App 렌더링 될 때 뷰포트 높이 계싼
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  useEffect(() => {
    setScreenSize();
  }, []);

  return (
    <>
      <LenisProvider>
        <div className="app">
          <CustomCursor />
          <Router />
        </div>
      </LenisProvider>
    </>
  );
}

export default App;
