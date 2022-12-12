import { useEffect } from "react";

const useScroll = (scrollCallback: (x: number, y: number) => any) => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const x = window.scrollX;
      const y = window.scrollY;
      scrollCallback(x, y);
    });
  }, [scrollCallback]);
};

export default useScroll;
