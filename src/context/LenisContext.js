/**
 * LenisContext.js
 * lenis 라이브러리 스크롤 전역에 설정하기 위한 코드
 */

import { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "lenis"; // 다시 원래대로 변경

const LenisContext = createContext(null);

export const LenisProvider = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Lenis 인스턴스 생성
    const lenis = new Lenis({
      lerp: 0.1,
      smooth: true,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollTo = (target = 0, options = {}) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, {
        immediate: true,
        ...options,
      });
    }
  };

  return (
    <LenisContext.Provider value={{ lenisRef, scrollTo }}>
      {children}
    </LenisContext.Provider>
  );
};

export const useLenis = () => useContext(LenisContext);
