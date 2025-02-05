// CustomCursor.jsx
import React, { useEffect, useState } from "react";
import { useCursor } from "./../context/CursorContext";

const CustomCursor = () => {
  const { cursorPosition, setCursorPosition } = useCursor();
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isFirstMove, setIsFirstMove] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleMouseMove = (e) => {
      if (isFirstMove) {
        setIsFirstMove(false);
        setIsVisible(true);
      }
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (isFirstMove) {
        setIsFirstMove(false);
        setIsVisible(true);
      }
      if (e.target.getAttribute("data-hoverable") === "true") {
        setIsHovered(true);
      }
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOut = (e) => {
      if (e.target.getAttribute("data-hoverable") === "true") {
        setIsHovered(false);
      }
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = (e) => {
      if (isFirstMove) {
        setIsFirstMove(false);
      }
      setCursorPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [setCursorPosition, isFirstMove]);

  if (isMobile) return null;

  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "2.4rem",
        height: "2.4rem",
        transform: `translate(${cursorPosition.x - 10}px, ${
          cursorPosition.y - 10
        }px) ${isHovered ? "scale(2.4)" : "scale(1)"}`,
        backgroundColor: isHovered ? "#fff" : "#0057ff",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
        transition: "scale 0.3s ease, background-color 0.3s ease",
        mixBlendMode: "exclusion",
        opacity: isVisible ? 1 : 0,
      }}
    />
  );
};

export default CustomCursor;
