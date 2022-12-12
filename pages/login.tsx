import { Help, QrCode } from "@mui/icons-material";
import {
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogTitle,
  IconButton,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Base from "../layout/Base";
import styles from "../styles/Login.module.sass";
import { v4 } from "uuid";

interface IQrProps {
  code: string;
}

const Qr = ({ code }: IQrProps) => (
  <div className={styles.code}>
    <Image
      src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&bgcolor=303030&color=fff&data=https://rant.raymknd.cyou/remote-access/${encodeURIComponent(
        code
      )}`}
      alt="Código QR para Remote Access"
      width={200}
      height={200}
      draggable="false"
    />
  </div>
);

interface IQrDialogProps {
  open: boolean;
  onClose: () => any;
}

const QrDialog = ({ open, onClose }: IQrDialogProps) => (
  <Dialog
    sx={{ maxWidth: 468, margin: "0 auto" }}
    open={open}
    onClose={onClose}
  >
    <DialogTitle>Remote Access</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Escanea el código QR en un dispositivo que ya tenga una sesión de Rant
        Place abierta.
      </DialogContentText>
      <div className={styles.qrWrapper}>
        {/* <CircularProgress color="secondary" /> */}
        <Qr code={v4()} />
      </div>
    </DialogContent>
    <DialogActions>
      <Button color="secondary">Ayuda</Button>
      <Button onClick={onClose}>Cerrar</Button>
    </DialogActions>
  </Dialog>
);

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [qr, setQr] = useState(false);
  return (
    <Base>
      <main className={styles.root}>
        <div className={styles.login}>
          <Card className={`${styles.card} hasThemeTransition`}>
            {loading && <LinearProgress className={styles.progress} />}
            <div className={styles.localLogin}>
              <div className={styles.heading}>
                <Typography variant="h5" component="div">
                  Hola ✌️
                </Typography>
                <small>
                  Aún no tienes cuenta?{" "}
                  <Link href="/register">Registrate aquí</Link>
                </small>
              </div>
              <TextField
                label="Usuario"
                fullWidth
                autoCorrect="off"
                autoCapitalize="off"
                autoComplete="off"
                variant="filled"
                disabled={loading}
              />
              <TextField
                label="Contraseña"
                type="password"
                fullWidth
                autoCorrect="off"
                autoCapitalize="off"
                autoComplete="off"
                variant="filled"
                disabled={loading}
              />
              <div className={styles.buttons}>
                <IconButton>
                  <Help />
                </IconButton>
                <div className={styles.side}>
                  <Button
                    disabled={loading}
                    onClick={() => setQr(true)}
                    color="secondary"
                    variant="contained"
                    startIcon={<QrCode />}
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
            </div>
          </Card>
        </div>
      </main>
      <QrDialog open={qr} onClose={() => setQr(false)} />
    </Base>
  );
};

export default Login;
