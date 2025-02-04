/**
 * Main.jsx
 * © 2025 yoona. All rights reserved.
 */

import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export default function Main() {
  // circle 변수
  const boxRef = useRef(null);
  const initialX = 900;
  const initialY = 479;
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [targetPosition, setTargetPosition] = useState({
    x: initialX,
    y: initialY,
  });
  // 텍스트 애니메이션 변수
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const words = ["UI/UX", "Web", "Creative"];
  // 텍스트 fadeup
  const textRef = useRef(null);

  // circle 애니메이션 작동 함수
  useEffect(() => {
    const box = boxRef.current;

    // 속도 지연
    const lerp = (start, end, factor) => start + (end - start) * factor;
    let animationFrameId;
    const smoothFactor = 0.005; // 값이 작을수록 더 느리게 움직임

    const updatePosition = () => {
      setPosition((prev) => ({
        x: lerp(prev.x, targetPosition.x, smoothFactor),
        y: lerp(prev.y, targetPosition.y, smoothFactor),
      }));

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    const handleMouseMove = (e) => {
      const boxRect = box.getBoundingClientRect();
      const mouseX = e.clientX - boxRect.left;
      const mouseY = e.clientY - boxRect.top;

      setTargetPosition({ x: mouseX, y: mouseY });
    };

    const handleMouseLeave = () => {
      setTargetPosition({ x: initialX, y: initialY });
    };

    updatePosition();
    box.addEventListener("mousemove", handleMouseMove);
    box.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      box.removeEventListener("mousemove", handleMouseMove);
      box.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [targetPosition]);
  // text 애니메이션 작동 함수
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    const activeSpan = containerRef.current?.children[currentIndex];
    if (activeSpan) {
      const spanWidth = activeSpan.offsetWidth;
      containerRef.current.style.width = `${spanWidth}px`;
    }

    return () => clearInterval(interval);
  }, [currentIndex, words.length]);
  // text fadeup
  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <main className="main">
      {/* 메인 비주얼 */}
      <section className="main-visual">
        <div className="circle-box" ref={boxRef}>
          <div
            className="circle"
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
              willChange: "transform",
            }}
          ></div>
        </div>
        <div className="title-area" ref={textRef}>
          <h2 className="main-title">
            <div className="changing-words">
              <div
                className="word-wrap"
                ref={containerRef}
                style={{ width: "auto" }}
              >
                {words.map((letter, index) => (
                  <span
                    key={index}
                    className={`${currentIndex === index ? "on" : ""}`}
                  >
                    {letter}
                  </span>
                ))}
              </div>
            </div>
            <span>Publisher</span>
          </h2>
          <ul className="bottom-text">
            <li>Yoona</li>
            <li>2025 PORTFOLIO</li>
            <li>UIUX PUBLISHER</li>
          </ul>
        </div>
        <a
          href="https://github.com/ya-cho/my-portfolio"
          target="_blank"
          className="spin"
          rel="noopener noreferrer"
        >
          <span className="blind">깃 허브 바로가기</span>
        </a>
      </section>
    </main>
  );
}
