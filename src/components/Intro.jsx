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
    // 새 탭 방문 체크
    const hasVisited = sessionStorage.getItem("hasVisitedBefore");

    if (hasVisited) {
      if (onComplete) onComplete();
      return;
    }

    const text = textRef.current;
    const line = lineRef.current;
    const mm = gsap.matchMedia();
    const tl = gsap.timeline();

    gsap.set(text, {
      x: "-44%",
      y: "-50%",
    });

    gsap.set(line, {
      width: 0,
    });

    mm.add(
      {
        isMobile: "(max-width: 768px)",
        isDesktop: "(min-width: 769px)",
      },
      (context) => {
        const { isMobile } = context.conditions;

        tl.to(text, {
          x: isMobile ? "-80%" : "-60%",
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
          .set(line, { opacity: 0 })
          .to(containerRef.current, {
            y: "-100vh",
            duration: 1,
            ease: "linear",
            onComplete: () => {
              // sessionStorage로 변경
              sessionStorage.setItem("hasVisitedBefore", "true");
              if (onComplete) onComplete();
            },
          });
      }
    );

    return () => {
      tl.kill();
      mm.revert();
    };
  }, [onComplete]);

  if (sessionStorage.getItem("hasVisitedBefore")) {
    return null;
  }

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
