import { Help, QrCode } from "@mui/icons-material";
import {
  Button,
  IconButton,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { Fragment, useState } from "react";
import Card from "../Card/Card";
import Loading from "./components/Loading/Loading";
import Qr from "./components/Qr/Qr";
import styles from "./Login.module.sass";
import { ILoginProps } from "./Login.types";

const Login = ({ onChange }: ILoginProps) => {
  const [loading, setLoading] = useState(false);
  const [qr, setQr] = useState(false);
  const TextFieldsSharedProps: TextFieldProps = {
    fullWidth: true,
    autoCorrect: "off",
    autoCapitalize: "off",
    autoComplete: "off",
    variant: "filled",
  };
  return (
    <Fragment>
      <Card>
        {loading && <Loading />}
        <div className={styles.heading}>
          <Typography variant="h5" component="div">
            Hola ✌️
          </Typography>
          <small>
            Aún no tienes cuenta?{" "}
            <Link
              href="/register"
              onClick={(e) => {
                e.preventDefault();
                onChange("register");
              }}
            >
              Registrate aquí
            </Link>
          </small>
        </div>
        <TextField
          label="Usuario"
          disabled={loading}
          {...TextFieldsSharedProps}
        />
        <TextField
          label="Contraseña"
          type="password"
          disabled={loading}
          {...TextFieldsSharedProps}
        />
        <div className={styles.buttons}>
          <IconButton>
            <Help />
          </IconButton>
          <div className={styles.side}>
            <Button
              disabled={loading}
              color="secondary"
              variant="contained"
              startIcon={<QrCode />}
              onClick={() => setQr(true)}
              disableElevation
              className={styles.qr}
            >
              Usar QR
            </Button>
            <Button
              type="submit"
              onClick={() => setLoading(true)}
              disabled={loading}
              variant="contained"
              disableElevation
            >
              Iniciar Sesión
            </Button>
          </div>
        </div>
      </Card>
      <Qr open={qr} onClose={() => setQr(false)} />
    </Fragment>
  );
};

export default Login;
