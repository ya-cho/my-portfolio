import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export default function Main() {
  // follow circle 위한 변수
  const boxRef = useRef(null);
  const initialX = 792;
  const initialY = 479;
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [targetPosition, setTargetPosition] = useState({
    x: initialX,
    y: initialY,
  });
  // 텍스트 애니메이션
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const words = ["UI/UX", "Web", "Creative"];

  // follow circle
  useEffect(() => {
    const box = boxRef.current;

    const lerp = (start, end, factor) => start + (end - start) * factor;

    let animationFrameId;
    const smoothFactor = 0.005; // 값이 작을수록 더 느리게 움직임 (0.01 ~ 0.1 사이 권장)

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

  // 텍스트 애니메이션
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // 1초마다 변경

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const activeSpan = containerRef.current?.children[currentIndex];
    if (activeSpan) {
      const spanWidth = activeSpan.offsetWidth;
      containerRef.current.style.width = `${spanWidth}px`;
    }
  }, [currentIndex]);

  return (
    <main className="main">
      <div className="main-visual">
        <div className="follow-circle-box" ref={boxRef}>
          <div
            className="circle"
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
              willChange: "transform",
            }}
          ></div>
        </div>
        <div className="title-area">
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
        <span className="spinner">
          <span className="blind">깃 허브 바로가기</span>
        </span>
      </div>
    </main>
  );
}
