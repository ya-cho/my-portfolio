// ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "./../context/LenisContext";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const lenis = useLenis?.() || null; // null 체크 추가

  useEffect(() => {
    const resetScroll = () => {
      if (lenis) {
        try {
          lenis.scrollTo(0, { immediate: true });
        } catch (e) {
          console.log("Lenis scroll failed, falling back to window scroll");
          window.scrollTo(0, 0);
        }
      } else {
        window.scrollTo(0, 0);
      }
    };

    resetScroll();

    return () => {
      // cleanup if needed
    };
  }, [pathname, lenis]);

  return null;
}
