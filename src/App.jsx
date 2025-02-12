/**
 * App.jsx
 * © 2025 yoona. All rights reserved.
 */

import React, { useEffect } from "react";
import "./assets/scss/global.scss";
import CommonRouter from "./Router"; // Router를 CommonRouter로 바꿔서 import
import { CursorProvider } from "./context/CursorContext";
import { CustomCursor } from "./components";
import { TopButton } from "./components/elements";
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
      {/* 스크롤탑 버튼 */}
      <TopButton />
      {/* 메인 circle 객체 커서 위치 데이터를 공유하기 위해 CursorProvider 추가 */}
      <CursorProvider>
        <div className="app">
          <CustomCursor />
          <CommonRouter /> {/* 라우터 부분만 CommonRouter로 변경 */}
        </div>
      </CursorProvider>
    </>
  );
}

export default App;
