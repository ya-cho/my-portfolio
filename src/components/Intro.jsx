import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./../assets/scss/intro.module.scss";

export default function Intro({ onComplete }) {
  const objRef = useRef(null); // 애니메이션 대상 참조
  const textRef = useRef(null); // 텍스트 참조
  const containerRef = useRef(null); // 전체 컨테이너 참조

  useEffect(() => {
    // 초기 애니메이션
    const text = textRef.current;
    if (text) {
      const tween = gsap.to(objRef.current, {
        duration: 2,
        x: text.offsetWidth, // text의 px 너비만큼 이동
        rotation: 360,
        ease: "none",
        paused: true, // 시작 시 멈춤 상태
      });

      // 애니메이션 시작
      tween.play();
    }

    // 5초 후 fade out 및 위로 이동 애니메이션 실행
    const timer = setTimeout(() => {
      gsap.to(containerRef.current, {
        opacity: 0,
        y: "-100vh", // 화면의 맨 아래에서 맨 위로 이동
        duration: 1, // 페이드 아웃 및 이동 시간
        ease: "power2.out", // 자연스러운 이동을 위한 easing
        onComplete: () => {
          if (onComplete) onComplete(); // 부모 컴포넌트로 종료 신호 전송
        },
      });
    }, 3000);

    // 클린업
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
