import React, { useEffect } from "react";
import Lenis from "lenis";
import "./assets/scss/global.scss";
import Router from "./Router";
import { LenisProvider } from "./context/LenisContext";

function App() {
  // app 렌더링 될 때 뷰포트 높이 계싼
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
          <Router />
        </div>
      </LenisProvider>
    </>
  );
}

export default App;
