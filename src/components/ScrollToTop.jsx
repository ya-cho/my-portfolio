// ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "../context/LenisContext";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const { lenisRef, scrollTo } = useLenis() || {};

  useEffect(() => {
    const resetScroll = () => {
      if (scrollTo) {
        scrollTo(0, { immediate: true });
      }
    };

    resetScroll();
    const rafId = requestAnimationFrame(resetScroll);
    const timeoutId = setTimeout(resetScroll, 100);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
    };
  }, [pathname, scrollTo]);

  return null;
}
