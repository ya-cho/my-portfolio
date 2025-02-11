// DetailView.jsx
// works 서브 화면 공통 컴포넌트

import { useNavigate, useLocation } from "react-router-dom";

import styles from "./../assets/scss/DetailView.module.scss";

export default function DetailView({
  className, // 각 페이지 클래스 네임
  bgTitle, // 배경 영역 타이틀
  contentTitle, // 컨텐츠 영역 타이틀
  period, // 프로젝트 기간
  tech, // 사용 기술
  role, // 역할 및 기여도
  overview, // 설명글
  images, // 이미지 배열 (src, alt)
  guide, // 가이드 문구
}) {
  const navigate = useNavigate();
  const location = useLocation();

  // pathname에서 현재 페이지 이름 추출 (work/koreanAir 형식에서)
  const currentPage = location.pathname.split("/").pop();
  // 가능한 페이지들의 순서 배열
  const pageOrder = [
    "koreanair",
    "skEcoplant",
    "kwangjuBank",
    "cjFreshway",
    "fintech",
    "payapp",
  ];
  const currentIndex = pageOrder.indexOf(currentPage);
  // 페이지 네비게이션
  const handlePrev = () => {
    if (currentIndex > 0) {
      navigate(`/work/${pageOrder[currentIndex - 1]}`);
    }
  };
  const handleNext = () => {
    if (currentIndex < pageOrder.length - 1) {
      navigate(`/work/${pageOrder[currentIndex + 1]}`);
    }
  };

  return (
    <>
      {/* 각 페이지 별도의 className 부여 */}
      <section className={`${styles.details} ${styles[className]}`}>
        <section className={styles.visual}>
          <div className={styles.bg}>
            <p
              className={styles["bg-title"]}
              dangerouslySetInnerHTML={{ __html: bgTitle }}
            ></p>
          </div>
        </section>
        <section className={styles.text}>
          <div className={styles["text-wrapper"]}>
            <h4>{contentTitle}</h4>
            <ul className={styles.info}>
              <li>
                <span className="font-bold">프로젝트 기간</span>
                <span>{period}</span>
              </li>
              <li>
                <span className="font-bold">사용 기술</span>
                <span>{tech}</span>
              </li>
              <li>
                <span className="font-bold">역할 및 기여도</span>
                <span>{role}</span>
              </li>
            </ul>
            <dl className={styles.overview}>
              <dt className="font-bold">Overview</dt>
              <dd dangerouslySetInnerHTML={{ __html: overview }}></dd>
            </dl>
          </div>
        </section>
        <section className={styles.img}>
          <div className={styles["img-wrapper"]}>
            {images &&
              images.length > 0 &&
              images.map((image, i) => (
                <img key={i} src={image.src} alt={image.alt} />
              ))}
          </div>
        </section>

        <section className={styles.bottom}>
          <nav className={styles["page-nav"]}>
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`${currentIndex === 0 ? styles.disabled : ""}`}
            >
              <span>← Prev</span>
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex === pageOrder.length - 1}
              className={`${
                currentIndex === pageOrder.length - 1 ? styles.disabled : ""
              }`}
            >
              <span>Next →</span>
            </button>
          </nav>
        </section>

        {/* TODO : 가이드 문구 있을 때 추가 */}
        {/* {guide && guide.length > 0 ? (
          <p className={styles.guide}>{guide}</p>
        ) : (
          ""
        )} */}
      </section>
      {/* 뒤로가기 버튼 (공통) */}
      <button type="button" onClick={() => navigate("/")} className="btn-back">
        <span className="blind">뒤로가기</span>
      </button>
    </>
  );
}
