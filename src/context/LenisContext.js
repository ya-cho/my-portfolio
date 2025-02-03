/**
 * LenisContext.js
 * lenis 라이브러리 스크롤 전역에 설정하기 위한 코드
 */

import { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "lenis";

// LenisContext 생성
const LenisContext = createContext(null);

export const LenisProvider = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Lenis 인스턴스 생성
    const lenis = new Lenis({
      lerp: 0.1, // 부드러운 스크롤 효과 (렌더링 비율)
      smooth: true, // 스크롤 효과를 부드럽게
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // 컴포넌트가 언마운트 될 때 Lenis 인스턴스 종료
    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  // Lenis 리셋 함수 (필요시 호출하여 Lenis 인스턴스를 재시작할 수 있음)
  const resetLenis = () => {
    if (lenisRef.current) {
      lenisRef.current.destroy(); // 기존 Lenis 인스턴스 종료
      const lenis = new Lenis({
        lerp: 0.1,
        smooth: true,
      });
      lenisRef.current = lenis;
      requestAnimationFrame(function raf(time) {
        lenisRef.current?.raf(time);
        requestAnimationFrame(raf);
      });
    }
  };

  // Lenis 인스턴스를 제공
  return (
    <LenisContext.Provider value={{ lenisRef, resetLenis }}>
      {children}
    </LenisContext.Provider>
  );
};

// LenisContext에 접근하기 위한 custom hook
export const useLenis = () => useContext(LenisContext);
