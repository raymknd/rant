import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material";
import {
  deepPurple,
  grey,
  lightGreen,
  lime,
  purple,
  red,
} from "@mui/material/colors";
import Head from "next/head";
import { Fragment, ReactNode, useEffect } from "react";
import useColorScheme from "../hooks/useColorScheme";
import useViewport from "../hooks/useViewport";
import { useAppSelector } from "../redux/hooks";
import { selectTheme } from "../redux/slices/themeSlice";

const Base = (props: { children: ReactNode }) => {
  useColorScheme();
  useViewport();
  const theme = useAppSelector(selectTheme);
  const prefersColorScheme = useMediaQuery("(prefers-color-scheme: dark)")
    ? "dark"
    : "light";
  const muiTheme = createTheme({
    palette: {
      mode: theme === "dark" || theme === "light" ? theme : prefersColorScheme,
      primary: lightGreen,
      secondary: grey,
    },
  });
  return (
    <Fragment>
      <Head>
        <title>Rant Place</title>
      </Head>
      <ThemeProvider theme={muiTheme}>{props.children}</ThemeProvider>
    </Fragment>
  );
};

export default Base;
