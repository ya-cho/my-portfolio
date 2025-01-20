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

  return (
    <>
      <div className="app">
        <Router />
      </div>
    </>
  );
}

export default App;
