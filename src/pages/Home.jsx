// Home.jsx 메인화면

import { useEffect, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { Intro, Header, Footer } from "../components";

function Home() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false); // Intro 제거
  };

  useEffect(() => {
    const container = document.querySelector("#scroll-container");
    if (container) {
      const scroll = new LocomotiveScroll({
        el: container,
        smooth: true,
      });

      return () => scroll.destroy();
    } else {
      console.error("Scroll container not found");
    }
  }, []);

  return (
    <>
      {/* {showIntro ? (
        <Intro onComplete={handleIntroComplete} />
      ) : (
        <>
          <Header />
          <div id="scroll-container">
            <main>
              <section>섹션</section>
            </main>
          </div>
          <Footer />
        </>
      )} */}

      <div id="scroll-container" data-scroll-container>
        <Header />
        <main className="scroll-contents">
          <section>섹션</section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default Home;
