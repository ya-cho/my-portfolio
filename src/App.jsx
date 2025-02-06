/**
 * App.jsx
 * © 2025 yoona. All rights reserved.
 */

import React, { useEffect } from "react";
import "./assets/scss/global.scss";
import Router from "./Router";
import { LenisProvider } from "./context/LenisContext";
import { CursorProvider } from "./context/CursorContext";
import { CustomCursor } from "./components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  // App 렌더링 될 때 뷰포트 높이 계싼
  useEffect(() => {
    function setScreenSize() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);

      // ScrollTrigger 위치 다시 계산
      ScrollTrigger.refresh();
    }

    setScreenSize();
    window.addEventListener("resize", setScreenSize);

    return () => {
      window.removeEventListener("resize", setScreenSize);
    };
  }, []);

  return (
    <>
      <LenisProvider>
        {/* 메인 circle 객체 커서 위치 데이터를 공유하기 위해 CursorProvider 추가 */}
        <CursorProvider>
          <div className="app">
            <CustomCursor />
            <Router />
          </div>
        </CursorProvider>
      </LenisProvider>
    </>
  );
}

export default App;
