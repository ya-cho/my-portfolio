// CustomCursor.jsx

import React, { useEffect, useState } from "react";
import { useCursor } from "./../context/CursorContext";

const CustomCursor = () => {
  const { cursorPosition, setCursorPosition } = useCursor();
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [cursorStyle, setCursorStyle] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const updateCursor = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseMove = (e) => {
      setIsVisible(true);
      updateCursor(e);
    };

    const handleMouseOver = (e) => {
      if (e.target.getAttribute("data-hoverable") === "true") {
        setIsHovered(true);
      }
      updateCursor(e);
    };

    const handleMouseOut = (e) => {
      if (e.target.getAttribute("data-hoverable") === "true") {
        setIsHovered(false);
      }
      updateCursor(e);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = (e) => {
      updateCursor(e);
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
  }, [setCursorPosition]);

  useEffect(() => {
    let animationFrame;
    const updatePosition = () => {
      setCursorStyle((prev) => ({
        x: prev.x + (cursorPosition.x - prev.x) * 0.2, // 부드러운 이동
        y: prev.y + (cursorPosition.y - prev.y) * 0.2,
      }));
      animationFrame = requestAnimationFrame(updatePosition);
    };

    animationFrame = requestAnimationFrame(updatePosition);
    return () => cancelAnimationFrame(animationFrame);
  }, [cursorPosition]);

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
        mixBlendMode: "difference",
        opacity: isVisible ? 1 : 0,
      }}
    />
  );
};

export default CustomCursor;
