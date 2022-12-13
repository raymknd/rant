import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./Qr.module.sass";
import QRCode from "qrcode";
import { v4 } from "uuid";
import { IQrProps } from "../../Login.types";

const Qr = ({ open, onClose }: IQrProps) => {
  const getQr = () =>
    `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
      `https://rant.raymknd.cyou/remote-access/${v4()}`
    )}&bgcolor=303030&color=fff`;
  return (
    <Dialog
      sx={{ maxWidth: 468, margin: "0 auto" }}
      onClose={onClose}
      open={open}
    >
      <DialogTitle>Remote Access</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Escanea el código QR en un dispositivo que ya tenga una sesión de Rant
          Place abierta.
        </DialogContentText>
        <div className={styles.qrWrapper}>
          <div className={styles.inner}>
            {/* {id === null && <CircularProgress />} */}
            <Image src={getQr()} alt={getQr()} fill />
          </div>
        </div>
      </DialogContent>
      <small style={{ textAlign: "center", margin: "1rem 0", opacity: 0.5 }}>
        {v4()}
      </small>
      <DialogActions>
        <Button color="secondary">Ayuda</Button>
        <Button onClick={onClose}>Cerrar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Qr;
