/**
 * Home.jsx
 * 홈 화면
 */

import { useState } from "react";
import { Intro, Header, Footer, Main, TopButton } from "../components";

function Home() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false); // Intro 제거
  };

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
      <TopButton />
      <Header />

      <Main />

      <Footer />
    </>
  );
}

export default Home;
