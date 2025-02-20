/**
 * KwangjuBank.jsx
 * © 2025 yoona. All rights reserved.
 */

import DetailView from "../components/DetailView";

export default function KwangjuBank() {
  // 전달할 데이터
  const data = {
    bgTitle: "광주은행 와뱅크<br />스마트뱅킹 고도화",
    contentTitle: "광주은행 와뱅크 스마트뱅킹 고도화",
    period: "2023.10 ~ 2023.12",
    tech: "HTML, CSS, Jquery",
    role: "온보딩, 마이데이터 퍼블리싱 구축 100%",
    overview:
      "기존 광주은행 스마트뱅킹의 디자인을 새롭게 변경하는 퍼블리싱 작업을 진행했습니다.<br />기존 소스를 최대한 활용하면서도 새로운 디자인을 적용해야 했기에 높은 난이도의 작업이었지만,<br />팀원들과의 원활한 협업 덕분에 성공적으로 수행할 수 있었습니다<br />아이디어를 적극적으로 공유하고 원활하게 소통한 결과, 짧은 시간 안에 많은 페이지를 구현할 수 있었으며,<br />프로젝트를 기한 내에 성공적으로 마무리할 수 있었습니다.",
    images: [
      { src: "/images/img_gj_landing1.webp", alt: "" },
      { src: "/images/img_gj_landing2.webp", alt: "" },
      { src: "/images/img_gj_landing3.webp", alt: "" },
    ],
  };
  return (
    <>
      <DetailView {...data} className="kwangju" />
    </>
  );
}
