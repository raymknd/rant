import { createSlice } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../store";

export interface ThemeState {
  theme: "auto" | "dark" | "light";
}

const initialState: ThemeState = {
  theme: "auto",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setDark: (state) => {
      state.theme = "dark";
    },
    setLight: (state) => {
      state.theme = "light";
    },
    setAuto: (state) => {
      state.theme = "auto";
    },
  },
});

export const { setDark, setLight, setAuto } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.theme;

export default themeSlice.reducer;
