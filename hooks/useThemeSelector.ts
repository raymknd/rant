import { useAppDispatch } from "../redux/hooks";
import { setAuto, setDark, setLight } from "../redux/slices/themeSlice";

const useThemeSelector = () => {
  const dispatch = useAppDispatch();
  return {
    setDark: () => dispatch(setDark()),
    setLight: () => dispatch(setLight()),
    setAuto: () => dispatch(setAuto()),
  };
};

export default useThemeSelector;
