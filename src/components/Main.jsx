/**
 * Main.jsx
 * © 2025 yoona. All rights reserved.
 */

import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCursor } from "./../context/CursorContext";

gsap.registerPlugin(ScrollTrigger);

export default function Main() {
  const { cursorPosition } = useCursor();
  const boxRef = useRef(null);
  const initialX = 900;
  const initialY = 479;
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const words = ["UI/UX", "Web", "Creative"];

  // Circle 애니메이션
  useEffect(() => {
    const box = boxRef.current;
    const smoothFactor = 0.005;
    let animationFrameId;

    const lerp = (start, end, factor) => start + (end - start) * factor;

    const updatePosition = () => {
      if (box) {
        const boxRect = box.getBoundingClientRect();
        const mouseX = cursorPosition.x - boxRect.left;
        const mouseY = cursorPosition.y - boxRect.top;

        setPosition((prev) => ({
          x: lerp(prev.x, mouseX, smoothFactor),
          y: lerp(prev.y, mouseY, smoothFactor),
        }));
      }

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [cursorPosition]);

  // 메인 텍스트 변경 애니메이션
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

  // 메인 타이틀
  useEffect(() => {
    gsap.fromTo(
      ".title-area",
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  // 섹션 타이틀 애니메이션
  useEffect(() => {
    const animateTitle = () => {
      gsap.utils.toArray(".section-title").forEach((title) => {
        const animation = gsap.fromTo(
          title,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            paused: true, // 애니메이션을 일시 정지 상태로 생성
            scrollTrigger: {
              trigger: title,
              start: "top 80%",
              onEnter: () => animation.play(), // 스크롤 시점에 애니메이션 실행
            },
          }
        );
      });
    };

    // 페이지 로드가 완료된 후 애니메이션 초기화
    window.addEventListener("load", animateTitle);
    return () => window.removeEventListener("load", animateTitle);
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
        <div className="title-area">
          <h2 className="main-title">
            <div className="changing-words">
              <div className="word-wrap" ref={containerRef}>
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
      {/* //메인 비주얼 */}

      {/* 기술 스택 */}
      <section className="section tech">
        <div className="inner">
          <h3 className="section-title">Technical Stack</h3>
          <ul className="tech-card">
            <li>
              <span>Framework</span>
              <h5>React</h5>
              <p>
                다양한 리액트 프로젝트 경험을 보유하고 있으며,
                <br />
                컴포넌트 기반 구조를 활용하여
                <br />
                유지보수가 용이한 코드 구조를 통해 효율적인 개발을 추구합니다.
              </p>
            </li>
            <li>
              <span>Markup & Style</span>
              <h5>HTML/SCSS</h5>
              <p>
                웹 접근성을 고려한 시맨틱한 마크업을 작성하며,
                <br />
                유지보수가 쉬운 구조적이고 효율적인 스타일을 추구합니다.
                <br />
                프로젝트에 적합한 최적의 솔루션을 고민하고 노력합니다.
              </p>
            </li>
            <li>
              <span>Teamwork</span>
              <h5>Communication</h5>
              <p>
                기획, 디자인, 개발 팀과의 소통을 중시하며,
                <br />
                예상치 못한 이슈가 발생했을 때에도 긍정적인 태도로
                <br />
                해결책을 모색하며, 보다 나은 방향으로 나아갈 수 있도록
                노력합니다.
              </p>
            </li>
          </ul>
        </div>
      </section>
      {/* //기술 스택 */}
    </main>
  );
}
