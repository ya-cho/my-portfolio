/**
 * KoreanAir.jsx
 * © 2025 yoona. All rights reserved.
 */

import DetailView from "../components/DetailView";

export default function KoreanAir() {
  // 전달할 데이터
  const data = {
    bgTitle: "대한항공<br />인공지능 컨텍센터 구축",
    contentTitle: "대한항공 인공지능 컨텍센터 구축",
    period: "2024.08 ~ 2024.10",
    tech: "React, HTML, SCSS, Javascript, Cloudscape",
    role: "퍼블리싱 구축 50% / 대응및운영 100%",
    overview:
      "대한항공과 아마존웹서비스(AWS)가 협력하여 진행한 AICC(AI Contact Center) Agent Web 프로젝트에 퍼블리셔로 참여하였습니다.<br />이 프로젝트는 AI 기반 컨택센터 시스템을 구축하는 것으로, 고객 응대의 효율성을 높이고 보다 직관적인 상담 환경을 제공하는 것을 목표로 했습니다.<br />웹 개발에는 React 라이브러리가 사용되었으며, AWS에서 제공하는 Cloudscape 디자인 시스템을 기반으로 <br />대한항공의 브랜드 아이덴티티에 맞춘 UI로 커스터마이징 작업을 진행하였습니다.<br />개발팀과 긴밀하게 협업하며 퍼블리싱 작업을 수행했고, 피드백을 빠르게 반영하여 디자인과 기능이 조화롭게 동작할 수 있도록 작업하였습니다.<br />이 과정에서 웹 접근성과 유지보수성을 고려한 스타일 구조를 설계하였으며, React 기반의 UI 컴포넌트들을 효율적으로 스타일링하여 보다 유연한 디자인 적용이 가능하도록 구현하였습니다.<br /><br />이 프로젝트를 통해 대규모 협업 환경에서의 퍼블리싱 경험을 쌓을 수 있었으며, AWS 환경에서의 UI 개발 및 Cloudscape 디자인 시스템 활용 역량을 키울 수 있었습니다.",
    images: [
      { src: "/images/img_ka_landing1.webp", alt: "" },
      { src: "/images/img_ka_landing2.webp", alt: "" },
      { src: "/images/img_ka_landing3.webp", alt: "" },
    ],
  };
  return (
    <>
      <DetailView {...data} className="koreanair" />
    </>
  );
}
