/**
 * Header.jsx
 * © 2025 yoona. All rights reserved.
 */

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLenis } from "./../context/LenisContext";
import styles from "./../assets/scss/Header.module.scss";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const headerRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false); // 헤더 메뉴
  const { lenisRef } = useLenis(); // lenis 초기화
  const [lastScrollY, setLastScrollY] = useState(0); // 마지막 스크롤 위치 추적
  const [isHeaderVisible, setIsHeaderVisible] = useState(true); // 헤더가 보이는지 여부

  const scrollThreshold = 100; // 스크롤이 일정 거리 이상 내려갔을 때 반응

  // 스크롤 이벤트를 감지하여 헤더의 보임/숨김 상태를 결정
  const handleScroll = () => {
    if (window.scrollY > lastScrollY && window.scrollY > scrollThreshold) {
      // 스크롤이 아래로 내려가면 헤더 숨기기
      setIsHeaderVisible(false);
    } else {
      // 스크롤이 위로 올라가면 헤더 보이게 하기
      setIsHeaderVisible(true);
    }
    setLastScrollY(window.scrollY); // 마지막 스크롤 위치 업데이트
  };

  // 컴포넌트가 마운트될 때 스크롤 이벤트 리스너 추가, 언마운트 시 제거
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // 메뉴 열 때 스크롤 정지
  useEffect(() => {
    if (showMenu) {
      lenisRef.current?.stop(); // 메뉴가 열리면 스크롤 정지
      document.body.style.overflow = "hidden"; // body overflow 설정
    } else {
      lenisRef.current?.start(); // 메뉴가 닫히면 스크롤 다시 시작
      document.body.style.overflow = "";
    }
  }, [showMenu, lenisRef]);

  return (
    <>
      <header
        className={`${styles.header} ${isHeaderVisible ? styles.show : ""}`}
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
                  abel="Kwangju Bank - 스마트뱅킹 프로젝트"
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
