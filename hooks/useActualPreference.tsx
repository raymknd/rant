import { useMediaQuery } from "@mui/material";
import { useAppSelector } from "../redux/hooks";
import { selectTheme } from "../redux/slices/themeSlice";

const useActualPreference = () => {
  const themeSelector = useAppSelector(selectTheme);
  const autoTheme = useMediaQuery("(prefers-color-scheme: dark)")
    ? "dark"
    : "light";
  return themeSelector === "dark" || themeSelector === "light"
    ? themeSelector
    : autoTheme;
};

export default useActualPreference;
