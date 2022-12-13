import { Button, TextField, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import styles from "./Navbar.module.sass";
import { useAppSelector } from "../../redux/hooks";
import { selectTheme } from "../../redux/slices/themeSlice";
import styled from "styled-components";
import { useRouter } from "next/router";

import RantLogoDark from "../../assets/global/logos/logo_dark.png";
import RantLogoLight from "../../assets/global/logos/logo_light.png";
import { INavbarProps } from "./Navbar.types";
import Preferences from "../Preferences/Preferences";
import useActualPreference from "../../hooks/useActualPreference";

const Root = styled.header.attrs({ className: styles.root })<INavbarProps>`
  position: ${({ position }) => position};
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
`;

const Navbar = ({ position }: INavbarProps) => {
  const theme = useActualPreference();
  const router = useRouter();
  return (
    <Fragment>
      <Root position={position}>
        <section className={styles.logo}>
          <Image
            src={theme === "dark" ? RantLogoDark : RantLogoLight}
            alt={`Logo de Rant Place, versión ${
              theme === "dark" ? "clara" : "oscura"
            }`}
            height={50}
            width={139.5}
          />
        </section>
        <section className={styles.search}>
          <TextField
            label="Buscar"
            variant="outlined"
            color="secondary"
            size="small"
            fullWidth
          />
        </section>
        <section className={styles.profile}>
          <Button
            href="/login"
            onClick={(e) => {
              e.preventDefault();
              router.push("/login");
            }}
            variant="contained"
            color="secondary"
          >
            Login
          </Button>
        </section>
      </Root>
      <Preferences />
    </Fragment>
  );
};

export default Navbar;
