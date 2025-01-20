import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import styles from "./../assets/scss/Header.module.scss";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const headerAni = gsap.to(headerRef.current, {
      yPercent: -100,
      duration: 0.2,
      ease: "none",
      scrollTrigger: {
        start: "top top",
        end: "max",
        markers: true,
        scrub: 0.3,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Clean up triggers
    };
  }, []);

  return (
    <header className={styles.header} ref={headerRef}>
      <h1>
        <Link to="/page1" className={styles.logo}>
          <span className="blind">홈화면으로 이동</span>
        </Link>
      </h1>
      <span className={styles["menu-button"]} aria-label="메뉴 보기"></span>
    </header>
  );
};

export default Header;
