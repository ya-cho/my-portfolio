/**
 * Header.jsx
 * © 2025 yoona. All rights reserved.
 */

import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLenis } from "./../context/LenisContext";
import styles from "./../assets/scss/Header.module.scss";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const headerRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const { lenisRef } = useLenis();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isTop, setIsTop] = useState(true);
  const location = useLocation(); // 현재 location 가져오기

  const scrollThreshold = 100;

  const handleScroll = () => {
    setIsTop(window.scrollY === 0);

    if (window.scrollY > lastScrollY && window.scrollY > scrollThreshold) {
      setIsHeaderVisible(false);
    } else {
      setIsHeaderVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  // 페이지 변경 감지하여 메뉴 상태 초기화
  useEffect(() => {
    if (showMenu) {
      setShowMenu(false);
      lenisRef.current?.start();
      document.body.style.overflow = "";
    }
  }, [location.pathname]); // location.pathname이 변경될 때마다 실행

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // 메뉴 상태에 따른 스크롤 제어
  useEffect(() => {
    if (showMenu) {
      lenisRef.current?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenisRef.current?.start();
      document.body.style.overflow = "";
    }
  }, [showMenu, lenisRef]);

  // cleanup 함수 추가
  useEffect(() => {
    return () => {
      // 컴포넌트 언마운트 시 스크롤 상태 복원
      document.body.style.overflow = "";
      lenisRef.current?.start();
    };
  }, []);

  return (
    <>
      <header
        className={`${styles.header} ${isHeaderVisible ? styles.show : ""} ${
          isTop ? styles.top : ""
        }`}
        ref={headerRef}
      >
        <h1>
          <Link to="/" className={styles.logo} data-hoverable="true">
            <span className="blind">홈화면으로 이동</span>
          </Link>
        </h1>
        <button
          className={styles["menu-button"]}
          aria-label="전체 메뉴"
          data-hoverable="true"
          onClick={() => setShowMenu(true)}
        >
          <span className="blind">전체 메뉴 리스트 펼치기</span>
        </button>
      </header>

      <div className={`${styles["gnb-wrapper"]} ${showMenu ? styles.on : ""}`}>
        <div className={styles.dim} onClick={() => setShowMenu(false)}></div>
        <div className={styles["gnb-area"]}>
          <div className={styles["gnb-header"]}>
            <button
              type="button"
              className={styles["btn-close"]}
              aria-label="전체 메뉴 닫기"
              data-hoverable="true"
              onClick={() => setShowMenu(false)}
            >
              <span className="blind">전체 메뉴 닫기</span>
            </button>
          </div>
          <nav
            className={styles.nav}
            aria-label="주요 프로젝트 목록"
            role="navigation"
          >
            <ul>
              <li>
                <Link
                  to="/work/koreanAir"
                  aria-label="Korean Air - 인공지능 컨택센터 프로젝트"
                >
                  <span>KOREAN AIR</span>
                  <span className={styles.focus}>인공지능 컨텍센터</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/work/skEcoplant"
                  aria-label="SK Ecoplant - 웨이블 서큘러 EPR 프로젝트"
                >
                  <span>SK ECOPLANT</span>
                  <span className={styles.focus}>웨이블 서큘러 EPR</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/work/kwangjuBank"
                  aria-label="Kwangju Bank - 스마트뱅킹 프로젝트"
                >
                  <span>KWANGJU BANK</span>
                  <span className={styles.focus}>스마트뱅킹</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/work/cjFreshway"
                  aria-label="CJ Freshway - FS 메뉴 프로젝트"
                >
                  <span>CJ FRESHWAY</span>
                  <span className={styles.focus}>FS 메뉴</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/work/fintech"
                  aria-label="Fintech - 모니 하이브리드앱 프로젝트"
                >
                  <span>FINTECH</span>
                  <span className={styles.focus}>모니 하이브리드앱</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/work/payapp"
                  aria-label="PayApp - 페이앱 홈페이지 프로젝트"
                >
                  <span>PAYAPP</span>
                  <span className={styles.focus}>페이앱 홈페이지</span>
                </Link>
              </li>
            </ul>
          </nav>
          <p className={styles.copyright}>
            Designed & Developed by YoonA © 2025
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
