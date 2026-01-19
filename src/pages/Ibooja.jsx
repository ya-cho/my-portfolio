/**
 * Ibooja.jsx
 * © 2026 yoona. All rights reserved.
 */

import DetailView from "../components/DetailView";

export default function Ibooja() {
  // 전달할 데이터
  const data = {
    bgTitle: "하나은행 아이부자<br />자원봉사 구축",
    contentTitle: "하나은행 아이부자 자원봉사 구축",
    period: "2025.04 ~ 2025.07",
    tech: "React, Typescript, SCSS",
    role: "퍼블리싱 100%",
    overview:
      "하나은행의 '아이부자'는 자녀와 부모가 함께 올바른 금융 습관을 형성하고 다양한 경제 활동을 경험할 수 있도록 돕는 금융 플랫폼입니다.<br />본 프로젝트에서는 아이들이 나눔의 가치를 배울 수 있는 대외연계 자원봉사 신청/관리 화면을 구축하여 서비스의 가치를 한 단계 더 확장했습니다.<br />특히, 디자인 가이드를 철저히 준수함과 동시에 디자이너 및 개발 파트너와의 긴밀하고 원활한 소통을 바탕으로 프로젝트의 완성도를 높였습니다. 이를 통해 기존 공통 컴포넌트의 구조와 일관성을 유지하며, React와 TypeScript를 활용해 사용자 중심의 화면을 정교하게 퍼블리싱하고 성공적으로 구현해냈습니다.",
    images: [
      { src: "/images/img_ibooja_landing1.webp", alt: "" },
      { src: "/images/img_ibooja_landing2.webp", alt: "" },
      { src: "/images/img_ibooja_landing3.webp", alt: "" },
    ],
  };
  return (
    <>
      <DetailView {...data} className="ibooja" />
    </>
  );
}
