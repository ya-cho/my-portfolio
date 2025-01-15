import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Icon from "./../assets/images/intro-object.svg";
import styles from "./../assets/scss/intro.module.scss";

export default function Intro({ onComplete }) {
  const objRef = useRef(null); // 애니메이션 대상 참조
  const textRef = useRef(null); // 텍스트 참조
  const containerRef = useRef(null); // 전체 컨테이너 참조

  useEffect(() => {
    // 초기 애니메이션
    const nav = textRef.current;
    if (nav) {
      const tween = gsap.to(objRef.current, {
        duration: 2,
        x: () => nav.offsetWidth, // nav의 px 너비만큼 이동
        xPercent: -100,
        rotation: 360,
        ease: "none",
        paused: true, // 시작 시 멈춤 상태
      });

      // 애니메이션 시작
      tween.play();
    }

    // 5초 후 fade out 애니메이션 실행
    const timer = setTimeout(() => {
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.5, // 페이드 아웃 시간
        onComplete: () => {
          if (onComplete) onComplete(); // 부모 컴포넌트로 종료 신호 전송
        },
      });
    }, 5000);

    // 클린업
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <section ref={containerRef} className={styles.intro}>
      <div className={styles["intro-container"]}>
        <div ref={objRef} className={styles.object}>
          <img src={Icon} alt="인트로 오브젝트" />
        </div>
        <h2 ref={textRef} className={styles["user-title"]}>
          Yoona Portfolio
        </h2>
      </div>
    </section>
  );
}
