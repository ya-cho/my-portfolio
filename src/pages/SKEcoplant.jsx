/**
 * SKEcoplant.jsx
 * © 2025 yoona. All rights reserved.
 */

import DetailView from "../components/DetailView";

export default function SKEcoplant() {
  // 전달할 데이터
  const data = {
    bgTitle: "SK에코플랜트<br />폐기물 관리 서비스 구축",
    contentTitle: "SK에코플랜트 폐기물 관리 서비스 구축",
    period: "2023.12 ~ 2024.07",
    tech: "React, HTML, SCSS, Javascript",
    role: "퍼블리싱 구축 100%",
    overview:
      "SK에코플랜트의 WAYBLE Circular EPR 프로젝트는 폐기물 처리 및 자원 순환을 위한 환경 플랫폼으로, 기업의 순환경제 실현을 지원하는 역할을 합니다.<br />공통 컴포넌트를 설계하여 재사용성과 유지보수성을 고려한 퍼블리싱을 구현했고  이를 통해 코드의 일관성을 유지하며 효율적인 개발 환경을 조성했습니다.<br />또한, 프로젝트 진행 중 MUI Chart 라이브러리를 활용한 데이터 시각화 작업을 시도하며, 리액트 내에서 다양한 라이브러리를 적용하는 경험을 했습니다. <br />실무에서 프론트엔드 개발과의 협업 과정을 직접 경험하면서, 퍼블리셔로서 더욱 넓은 시야를 가지게 되었고<br />WAYBLE Circular EPR 프로젝트는 기술적 성장뿐만 아니라 협업과 커뮤니케이션의 중요성을 다시 한번 깨닫게 해준 의미 있는 프로젝트였습니다.",
    images: [
      { src: "/images/img_sk_landing1.webp", alt: "" },
      { src: "/images/img_sk_landing2.webp", alt: "" },
    ],
  };
  return (
    <>
      <DetailView {...data} className="sk-ecoplant" />
    </>
  );
}
