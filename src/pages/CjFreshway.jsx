/**
 * CjFreshway.jsx
 * © 2025 yoona. All rights reserved.
 */

import DetailView from "../components/DetailView";

export default function CjFreshway() {
  // 전달할 데이터
  const data = {
    bgTitle: "CJ프레시웨이<br/>식단 관리 시스템<br />FS MENU 구축",
    contentTitle: "CJ프레시웨이 식단 관리 시스템 FS MENU 구축",
    period: "2023.03 ~ 2023.07",
    tech: "React, HTML, SCSS, Javascript",
    role: "Front, Back Office 50% 구축",
    overview:
      "CJ 프레시웨이 FS 메뉴 프로젝트는 단체 급식(Food Service, FS)을 운영하는 CJ 프레시웨이의 식단 관리 시스템을 개선하는 프로젝트입니다.<br />FS 메뉴 프로젝트는 프론트오피스와 백오피스, 두 가지 영역으로 나누어 진행되었습니다. <br />짧은 기간 내에 많은 작업을 수행해야 했기에 일정 관리와 효율적인 퍼블리싱 전략이 중요한 과제였습니다.<br />초기에 퍼블리싱 공통 가이드를 철저히 정리하고 적용함으로써, 작업의 일관성을 유지하고 <br />개발 및 디자인 팀과의 협업을 원활하게 진행할 수 있었습니다. 이를 통해 반복 작업을 최소화하고, 빠른 속도로 페이지를 완성할 수 있었습니다.",
  };
  return (
    <>
      <DetailView {...data} className="cj" />
    </>
  );
}
