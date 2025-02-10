/**
 * Main.jsx
 * © 2025 yoona. All rights reserved.
 */

import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCursor } from "./../context/CursorContext";
import { Button } from "./../components/elements";

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
  const isFirstMount = useRef(true);

  useEffect(() => {
    const box = boxRef.current;
    const mainVisual = document.querySelector(".main-visual");
    const smoothFactor = 0.005;
    let animationFrameId;

    // 초기 중앙 위치 설정 함수
    const setCenterPosition = () => {
      if (box) {
        // viewport 기준으로 중앙 위치 계산
        const vw = window.innerWidth;
        const vh = window.innerHeight;

        const centerX = vw / 2;
        const centerY = vh / 2;

        setPosition({ x: centerX, y: centerY });
      }
    };

    // 초기에 중앙 위치 설정
    if (isFirstMount.current) {
      setCenterPosition();
      isFirstMount.current = false;
      return;
    }

    const lerp = (start, end, factor) => start + (end - start) * factor;

    const updatePosition = () => {
      if (box && mainVisual) {
        const mainVisualRect = mainVisual.getBoundingClientRect();
        const vw = window.innerWidth;
        const vh = window.innerHeight;

        const isMouseInside =
          cursorPosition.x >= mainVisualRect.left &&
          cursorPosition.x <= mainVisualRect.right &&
          cursorPosition.y >= mainVisualRect.top &&
          cursorPosition.y <= mainVisualRect.bottom;

        if (isMouseInside) {
          const boxRect = box.getBoundingClientRect();
          const mouseX = cursorPosition.x - boxRect.left;
          const mouseY = cursorPosition.y - boxRect.top;

          setPosition((prev) => ({
            x: lerp(prev.x, mouseX, smoothFactor),
            y: lerp(prev.y, mouseY, smoothFactor),
          }));
        } else {
          // viewport 기준 중앙 위치로 이동
          const centerX = vw / 2;
          const centerY = vh / 2;

          setPosition((prev) => ({
            x: lerp(prev.x, centerX, smoothFactor),
            y: lerp(prev.y, centerY, smoothFactor),
          }));
        }
      }

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    animationFrameId = requestAnimationFrame(updatePosition);

    // resize 이벤트에서도 viewport 기준으로 중앙 위치 재계산
    window.addEventListener("resize", setCenterPosition);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", setCenterPosition);
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

  // gsap 애니메이션
  useEffect(() => {
    // 메인 타이틀 애니메이션
    gsap.fromTo(
      ".title-area",
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 2, ease: "power3.out" }
    );

    // 섹션 타이틀 애니메이션
    gsap.utils.toArray(".section-title").forEach((title) => {
      gsap.fromTo(
        title,
        {
          opacity: 0,
          y: 50,
          scale: 1.5,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: title,
            start: "top 90%",
            end: "top 60%",
            scrub: 1,
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // tech 애니메이션
    gsap.fromTo(
      ".tech-card li",
      {
        y: 200,
      },
      {
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.4,
        scrollTrigger: {
          trigger: ".tech",
          start: "top center",
          end: "bottom 80%",
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      }
    );

    // work 애니메이션
    let mm = gsap.matchMedia();
    // 1024px 이상일 때 실행될 애니메이션
    mm.add("(min-width: 1025px)", () => {
      gsap.utils.toArray(".work-item .item").forEach((item) => {
        // text 요소 .title 요소에 초기값 설정
        gsap.set(item.querySelector(".text"), {
          yPercent: -50,
        });
        gsap.set(item.querySelector(".text .title"), {
          color: "#ddd",
        });

        // 스크롤 트리거 애니메이션
        gsap.to(item.querySelector(".text"), {
          yPercent: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom bottom",
            scrub: 1,
            toggleActions: "play none none reverse",
          },
        });
        // title opacity 애니메이션
        gsap.to(item.querySelector(".text .title"), {
          color: "#000",
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 50%",
            end: "bottom 20%",
            scrub: 1,
            toggleActions: "play none none reverse",
          },
        });
      });
    });

    // work 썸네일 이미지 패럴럭스
    gsap.utils.toArray(".work-item .img").forEach((imgContainer) => {
      gsap.to(imgContainer.querySelector("img"), {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: imgContainer,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <main className="main">
      {/* visual */}
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
            <li>2025 PORTFOLIO</li>
            <li>Yoona</li>
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
      {/* //visual */}

      {/* tech */}
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
              <h5>HTML/CSS</h5>
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
      {/* //tech */}

      {/* works */}
      <section className="section works">
        <div className="inner">
          <h3 className="section-title">My works</h3>
          <div className="work-item">
            <div className="item">
              <div className="img">
                <img
                  src="/images/img_koreanair_thumbnail.png"
                  alt="대한항공 AICC AGENT WEB 인공지능 센터 구축"
                />
              </div>
              <div className="text">
                <p className="project-name">대한항공 Agent Web</p>
                <h4 className="title">
                  대한항공 AICC AGENT WEB
                  <br />
                  인공지능 컨텍센터 구축
                </h4>
                <ul className="tags">
                  <li>#react</li>
                  <li>#cloudscape</li>
                  <li>#html</li>
                  <li>#scss</li>
                  <li>#javscript</li>
                </ul>
                <Button to="/work/koreanair" className="btn-round-large">
                  View
                </Button>
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img
                  src="/images/img_sk_thumbnail.png"
                  alt="SK 에코플랜트 Wayble Circular EPR 구축"
                />
              </div>
              <div className="text">
                <p className="project-name">SK에코플랜트 Wayble EPR</p>
                <h4 className="title">
                  SK에코플랜트 폐기물 처리 플랫폼
                  <br />
                  Wayble Circular EPR 구축
                </h4>
                <ul className="tags">
                  <li>#react</li>
                  <li>#html</li>
                  <li>#scss</li>
                  <li>#javscript</li>
                </ul>
                <Button to="/work/skEcoplant" className="btn-round-large">
                  View
                </Button>
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img
                  src="/images/img_gwangju_thumbnail.png"
                  alt="광주은행 스마트뱅킹 앱 고도화"
                />
              </div>
              <div className="text">
                <p className="project-name">광주은행 고도화 Renewal</p>
                <h4 className="title">
                  광주은행
                  <br />
                  스마트뱅킹 앱 고도화
                </h4>
                <ul className="tags">
                  <li>#html</li>
                  <li>#css</li>
                  <li>#jquery</li>
                </ul>
                <Button to="/work/kwangjuBank" className="btn-round-large">
                  View
                </Button>
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img
                  src="/images/img_cj_thumbnail.png"
                  alt="CJ 프레시웨이 FS MENU 구축"
                />
              </div>
              <div className="text">
                <p className="project-name">CJ 프레시웨이 FS MENU</p>
                <h4 className="title">
                  CJ 프레시웨이
                  <br />
                  FS MENU 구축
                </h4>
                <ul className="tags">
                  <li>#react</li>
                  <li>#html</li>
                  <li>#scss</li>
                  <li>#javscript</li>
                </ul>
                <Button to="/work/cjFreshway" className="btn-round-large">
                  View
                </Button>
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img
                  src="/images/img_fintech_thumbnail.png"
                  alt="핀테크 마이데이터 모니 하이브리드 앱 구축"
                />
              </div>
              <div className="text">
                <p className="project-name">Fintech</p>
                <h4 className="title">
                  핀테크 마이데이터 모니
                  <br />
                  하이브리드 앱 구축
                </h4>
                <ul className="tags">
                  <li>#react</li>
                  <li>#html</li>
                  <li>#scss</li>
                  <li>#javscript</li>
                </ul>
                <Button to="/work/fintech" className="btn-round-large">
                  View
                </Button>
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img
                  src="/images/img_payapp_thumbnail.png"
                  alt="결제솔루션 PAYAPP 홈페이지 제작"
                />
              </div>
              <div className="text">
                <p className="project-name">UDID</p>
                <h4 className="title">
                  결제솔루션 PAYAPP
                  <br />
                  홈페이지 제작
                </h4>
                <ul className="tags">
                  <li>#html</li>
                  <li>#scss</li>
                  <li>#jquery</li>
                </ul>
                <Button to="/work/payapp" className="btn-round-large">
                  View
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //works */}
    </main>
  );
}
