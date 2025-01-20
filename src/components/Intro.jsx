/**
 * Intro.jsx
 * 인트로 애니메이션 화면
 */

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./../assets/scss/intro.module.scss";

export default function Intro({ onComplete }) {
  const objRef = useRef(null); // 애니메이션 오브젝트
  const textRef = useRef(null); // 텍스트 참조
  const containerRef = useRef(null); // 전체 컨테이너 참조

  useEffect(() => {
    // 시작 애니메이션
    const text = textRef.current;
    if (text) {
      const tween = gsap.to(objRef.current, {
        duration: 2,
        x: text.offsetWidth,
        rotation: 360,
        ease: "none",
        paused: true,
      });

      // 애니메이션 시작
      tween.play();
    }

    // fade out
    const timer = setTimeout(() => {
      gsap.to(containerRef.current, {
        opacity: 0,
        y: "-100vh",
        duration: 1,
        ease: "power2.out",
        onComplete: () => {
          if (onComplete) onComplete();
        },
      });
    }, 3000);

    // clean
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <section ref={containerRef} className={styles.intro}>
      <div className={styles["intro-container"]}>
        <div ref={objRef} className={styles.object}></div>
        <h2 ref={textRef} className={styles["user-title"]}>
          Yoona Portfolio
        </h2>
      </div>
    </section>
  );
}
