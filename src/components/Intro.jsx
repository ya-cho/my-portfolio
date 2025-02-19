/**
 * Intro.jsx
 * © 2025 yoona. All rights reserved.
 */

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./../assets/scss/Intro.module.scss";

export default function Intro({ onComplete }) {
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    const line = lineRef.current;
    const mm = gsap.matchMedia(); // matchMedia 설정
    const tl = gsap.timeline();

    // 초기 위치 설정
    gsap.set(text, {
      x: "-44%",
      y: "-50%",
    });

    // 라인 초기 설정
    gsap.set(line, {
      width: 0,
    });

    // 미디어쿼리에 따라 다른 애니메이션 적용
    mm.add(
      {
        isMobile: "(max-width: 768px)", // 모바일 조건
        isDesktop: "(min-width: 769px)", // 데스크탑 조건
      },
      (context) => {
        const { isMobile } = context.conditions;

        // 애니메이션 시퀀스 (모바일 & 데스크탑 분리)
        tl.to(text, {
          x: isMobile ? "-80%" : "-60%", // 모바일이면 -80%, 아니면 -60%
          duration: 3,
          ease: "linear",
        })
          .to(
            line,
            {
              width: "100%",
              duration: 3,
              ease: "linear",
            },
            "<"
          )
          .set(line, { opacity: 0 }) // 라인 즉시 숨김
          .to(containerRef.current, {
            opacity: 0,
            y: "-100vh",
            duration: 1,
            ease: "linear",
            onComplete: () => {
              if (onComplete) onComplete();
            },
          });
      }
    );

    return () => {
      tl.kill();
      mm.revert(); // matchMedia 해제
    };
  }, [onComplete]);

  return (
    <section className={styles.intro} ref={containerRef}>
      <div className={styles["intro-container"]}>
        <h2 className={styles["user-title"]} ref={textRef}>
          Yoona's Creative<span className={styles.object}></span>Works
        </h2>
        <div className={styles.line} ref={lineRef}></div>
      </div>
    </section>
  );
}
