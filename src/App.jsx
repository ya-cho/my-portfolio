import React, { useEffect } from "react";
import Lenis from "lenis";
import "./assets/scss/global.scss";
import Router from "./Router";

function App() {
  useEffect(() => {
    // Lenis 초기화
    const lenis = new Lenis({
      lerp: 0.1,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // app 렌더링 될 때 뷰포트 높이 계싼
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  return (
    <>
      <div className="app">
        <Router />
      </div>
    </>
  );
}

export default App;
