import { Button, Card } from "@mui/material";
import { Fragment } from "react";
import Navbar from "../components/Navbar/Navbar";
import Base from "../layout/Base";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectTheme, setDark, setLight } from "../redux/slices/themeSlice";

const Home = () => {
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();
  return (
    <Base>
      <Navbar />
    </Base>
  );
};

export default Home;
