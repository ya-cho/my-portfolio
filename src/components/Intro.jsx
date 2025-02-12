/**
 * Intro.jsx
 * © 2025 yoona. All rights reserved.
 */

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./../assets/scss/Intro.module.scss";

export default function Intro({ onComplete }) {
  const objRef = useRef(null); // 오브젝트
  const textRef = useRef(null); // 텍스트
  const containerRef = useRef(null); // 전체 컨테이너

  useEffect(() => {
    // sessionStorage에서 'hasSeenIntro' 값을 체크하여 첫 방문 여부 확인
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");

    if (!hasSeenIntro) {
      const text = textRef.current;
      const obj = objRef.current;

      if (text && obj) {
        const distance = text.offsetWidth - obj.offsetWidth;

        const tween = gsap.to(obj, {
          duration: 2,
          x: distance,
          rotation: 360,
          ease: "none",
          paused: true,
        });

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
            // 인트로가 끝난 후, 'hasSeenIntro' 값을 sessionStorage에 저장
            sessionStorage.setItem("hasSeenIntro", "true");
          },
        });
      }, 3000);

      // clean
      return () => clearTimeout(timer);
    } else {
      // 인트로 이미 재생한 경우 메인으로 바로 이동
      if (onComplete) onComplete();
    }
  }, [onComplete]);

  return (
    <section ref={containerRef} className={styles.intro}>
      <div className={styles["intro-container"]}>
        <div ref={objRef} className={styles.object}></div>
        <h2 ref={textRef} className={styles["user-title"]}>
          Yoona's Creative Works
        </h2>
      </div>
    </section>
  );
}
