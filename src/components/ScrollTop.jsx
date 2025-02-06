// 페이지 이동 시 스크롤을 맨 위로 이동시키는 컴포넌트

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 페이지 변경 시 스크롤을 맨 위로 이동
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // 즉시 이동. 'smooth'로 변경하면 부드럽게 이동
    });
  }, [pathname]); // pathname이 변경될 때마다 실행

  return null;
}
