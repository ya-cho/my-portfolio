/**
 * Home.jsx
 * © 2025 yoona. All rights reserved.
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
          <TopButton />
          <Header />

          <Main />

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
