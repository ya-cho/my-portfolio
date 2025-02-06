/**
 * TopButton.jsx
 * © 2025 yoona. All rights reserved.
 */

import React, { useState, useEffect } from "react";

export default function ScrollTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const currentScrollY = window.scrollY;

      // 스크롤 방향 체크
      const isScrollingUp = currentScrollY < lastScrollY;

      // 위로 스크롤 중이고 스크롤 위치가 100px 이상일 때만 버튼 표시
      if (isScrollingUp && currentScrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // 현재 스크롤 위치 저장
      setLastScrollY(currentScrollY);
    };

    // 스크롤 이벤트에 throttle 적용해서 성능 최적화
    let timeoutId;
    const handleScroll = () => {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          toggleVisibility();
          timeoutId = null;
        }, 100);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={`floating-top-button ${isVisible ? "active" : ""}`}>
      <button
        type="button"
        className="top-button"
        aria-label="페이지 상단으로 가기"
        data-hoverable="true"
        onClick={scrollToTop}
      >
        <span className="blind">페이지 상단으로 가기 버튼</span>
      </button>
    </div>
  );
}
