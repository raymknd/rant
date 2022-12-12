import { useEffect } from "react";

const useViewport = () => {
  useEffect(() => {
    const setSize = () => {
      const h = document.documentElement.clientHeight;
      document.body.style.setProperty(
        "--viewportHeight",
        h ? `${h}px` : "100vh"
      );
    };
    setSize();
    window.addEventListener("resize", setSize);
  }, []);
};

export default useViewport;
