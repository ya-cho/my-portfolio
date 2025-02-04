/**
 * CustomCursor.jsx
 * © 2025 yoona. All rights reserved.
 */

import React, { useState, useEffect } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // 초기값 설정

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.getAttribute("data-hoverable") === "true") {
        setIsHovered(true);
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.getAttribute("data-hoverable") === "true") {
        setIsHovered(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  // 모바일이면 커스텀 커서를 렌더링하지 않음
  if (isMobile) return null;

  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "2.4rem",
        height: "2.4rem",
        transform: `translate(${position.x - 10}px, ${position.y - 10}px) ${
          isHovered ? "scale(2)" : "scale(1)"
        }`,
        backgroundColor: isHovered ? "#fff" : "#0057FF",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
        transition: "scale 0.3s ease, background-color 0.3s ease",
        mixBlendMode: "exclusion",
      }}
    />
  );
};

export default CustomCursor;
