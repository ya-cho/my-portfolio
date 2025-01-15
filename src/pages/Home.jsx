import React, { useState } from "react";
import { Intro, Header } from "../components";

function Home() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false); // Intro 제거
  };

  return (
    <div className="app">
      {showIntro ? (
        <Intro onComplete={handleIntroComplete} />
      ) : (
        <>
          <Header />
          <section></section>
        </>
      )}
    </div>
  );
}

export default Home;
