import { useEffect } from "react";
import { useAppSelector } from "../redux/hooks";
import { selectTheme, ThemeState } from "../redux/slices/themeSlice";

const useColorScheme = () => {
  const theme = useAppSelector(selectTheme);
  useEffect(() => {
    const setTheme = (t: ThemeState["theme"]) =>
      (document.documentElement.dataset.theme = t);
    setTheme(theme);
  }, [theme]);
};

export default useColorScheme;
