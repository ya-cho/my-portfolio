/**
 * Payapp.jsx
 * © 2025 yoona. All rights reserved.
 */

import DetailView from "../components/DetailView";

export default function Payapp() {
  // 전달할 데이터
  const data = {
    bgTitle: "PAYAPP<br />홈페이지 제작",
    contentTitle: "PAYAPP 결제 플랫폼 홈페이지 제작",
    period: "2020.09 ~ 2021.01",
    tech: "HTML, SCSS, Jquery",
    role: "디자인 30% / 퍼블리싱 30%",
    overview:
      "PayApp은 온라인과 오프라인에서 간편 결제 및 정산 서비스를 제공하는 플랫폼입니다.<br />다양한 결제 수단을 지원하며, 모바일과 웹에서 손쉽게 결제를 처리할 수 있도록 돕는 서비스입니다.<br />PayApp의 공식 홈페이지 제작 과정에서는 디자인과 퍼블리싱을 함께 진행했습니다.<br />각 작업자가 디자인한 화면을 바탕으로 퍼블리싱을 진행하며, SCSS를 활용해 mixin을 만들어 스타일을 간결하고 효율적으로 작성할 수 있었습니다.<br />이를 통해 반복되는 코드 작성 없이, 유지보수성과 확장성이 뛰어난 스타일을 구현할 수 있었고, 빠르고 효율적인 시간 내에 홈페이지를 구축할 수 있었습니다<br />이 프로젝트를 통해 디자인과 개발의 협업을 더욱 원활하게 진행할 수 있었으며, 퍼블리싱의 효율성과 스타일링 관리에 대한 좋은 경험을 쌓을 수 있었습니다.",
    images: [
      { src: "/images/img_payapp_detail1.webp", alt: "" },
      { src: "/images/img_payapp_detail2.webp", alt: "" },
      { src: "/images/img_payapp_detail3.webp", alt: "" },
    ],
  };
  return (
    <>
      <DetailView {...data} className="payapp" />
    </>
  );
}
