import { Button, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import useScroll from "../../hooks/useScroll";
import styles from "./Navbar.module.sass";
import { useAppSelector } from "../../redux/hooks";
import { selectTheme } from "../../redux/slices/themeSlice";
import styled, { css } from "styled-components";
import { useRouter } from "next/router";

import RantLogoDark from "../../assets/global/logos/logo_dark.png";
import RantLogoLight from "../../assets/global/logos/logo_light.png";
import { INavbarProps } from "./Navbar.types";

const Root = styled.header.attrs({ className: styles.root })<INavbarProps>`
  position: ${({ position }) => position};
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
`;

const Navbar = ({ position }: INavbarProps) => {
  const [detached, setDetached] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const themeSelector = useAppSelector(selectTheme);
  const autoTheme = useMediaQuery("(prefers-color-scheme: dark)")
    ? "dark"
    : "light";
  const router = useRouter();
  const isDark = theme === "dark";
  useEffect(() => {
    switch (themeSelector) {
      case "dark":
      case "light":
        setTheme(themeSelector);
      case "auto":
      default:
        setTheme(autoTheme);
    }
    console.log(isDark);
  }, [themeSelector, autoTheme, isDark]);
  useScroll((_x, y) => {
    if (y > 1) setDetached(true);
    else setDetached(false);
  });
  return (
    <Root position={position}>
      <section className={styles.logo}>
        <Image
          src={isDark ? RantLogoDark : RantLogoLight}
          alt={`Logo de Rant Place, versión ${isDark ? "clara" : "oscura"}`}
          height={50}
          width={139.5}
        />
      </section>
      <section className={styles.profile}>
        <Button
          href="/login"
          onClick={(e) => {
            e.preventDefault();
            router.push("/login");
          }}
          variant="outlined"
        >
          Login
        </Button>
      </section>
    </Root>
  );
};

export default Navbar;
