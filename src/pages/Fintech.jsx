/**
 * Fintech.jsx
 * © 2025 yoona. All rights reserved.
 */

import DetailView from "../components/DetailView";

export default function Fintech() {
  // 전달할 데이터
  const data = {
    bgTitle: "마이데이터 모니<br />하이브리드앱 구축",
    contentTitle: "마이데이터 모니 하이브리드앱 구축",
    period: "2022.01 ~ 2022.07",
    tech: "React, HTML, SCSS, Javascript",
    role: "퍼블리싱 구축 100%",
    overview:
      "마이데이터 모니 서비스는 개인의 금융 데이터를 통합 관리하고 분석할 수 있도록 지원하는 서비스입니다.<br />사용자는 여러 금융 기관의 데이터를 한곳에서 조회하고, 맞춤형 금융 정보를 제공받을 수 있습니다<br />이 프로젝트는 React로 개발되었으며, 이를 통해 리액트를 처음 경험하는 계기가 되었습니다.<br />JSX를 활용하면서 자바스크립트에 대한 이해도 한층 깊어졌고, 컴포넌트 기반 개발 방식의 효율성을 체감할 수 있었습니다.<br />또한, 이 프로젝트에서의 긍정적인 경험 덕분에 이후에도 자연스럽게 리액트 기반 프로젝트를 이어가는 발판이 되었습니다.",
  };
  return (
    <>
      <DetailView {...data} className="fintech" />
    </>
  );
}
