// ScrollTop.jsx

import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      // DOM이 업데이트되기 전에 현재 스크롤 위치를 저장
      const prevScroll = window.scrollY;

      // 즉시 스크롤 맨 위로
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);

      // 약간의 지연 후 다시 한번 스크롤 맨 위로 (DOM 업데이트 이후를 보장)
      const timeoutId = requestAnimationFrame(() => {
        window.scrollTo(0, 0);
        document.documentElement.style.scrollBehavior = "";
      });

      prevPathRef.current = pathname;
      return () => cancelAnimationFrame(timeoutId);
    }
  }, [pathname]);

  return null;
}
