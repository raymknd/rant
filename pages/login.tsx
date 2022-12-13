import Base from "../layout/Base";
import styles from "../styles/Login.module.sass";
import Login from "../components/Login/Login/Login";
import Register from "../components/Login/Register/Register";
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { IPages } from "../components/Login/shared.types";

const TransitionWrapper = (props: { children: ReactNode }) => {
  return (
    <motion.div
      transition={{ type: "spring", duration: 0.4 }}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      className={styles.inner}
    >
      {props.children}
    </motion.div>
  );
};

const LoginPage = () => {
  const [actual, setActual] = useState<IPages>("login");
  return (
    <Base>
      <main className={styles.root}>
        <AnimatePresence mode="wait">
          {actual === "login" && (
            <TransitionWrapper key="login">
              <Login onChange={(p) => setActual(p)} />
            </TransitionWrapper>
          )}
          {actual === "register" && (
            <TransitionWrapper key="register">
              <Register onChange={(p) => setActual(p)} />
            </TransitionWrapper>
          )}
          {actual === "forgot" && (
            <Register onChange={(p) => setActual(p)} key="forgot" />
          )}
        </AnimatePresence>
      </main>
    </Base>
  );
};

export default LoginPage;
