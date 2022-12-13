import { ArrowDownward } from "@mui/icons-material";
import { Button, TextField, TextFieldProps, Typography } from "@mui/material";
import Link from "next/link";
import Card from "../Card/Card";
import Heading from "../Card/components/Heading/Heading";
import Loading from "../Login/components/Loading/Loading";
import styles from "./Register.module.sass";
import { IRegisterProps } from "./Register.types";

const Register = ({ onChange }: IRegisterProps) => {
  const TextFieldsSharedProps: TextFieldProps = {
    fullWidth: true,
    autoCorrect: "off",
    autoCapitalize: "off",
    autoComplete: "off",
    variant: "filled",
  };
  return (
    <Card className={styles.card}>
      {/* <Loading /> */}
      <Heading
        title="Bienvenid@ 🖖"
        subtitle="Al crear una cuenta de Rant Place aceptas los términos y condiciones"
      />
      <TextField label="Nombre" {...TextFieldsSharedProps} />
      <TextField label="Usuario" {...TextFieldsSharedProps} />
      <TextField type="email" label="Correo" {...TextFieldsSharedProps} />
      <div className={styles.buttons}>
        <Button
          type="submit"
          color="secondary"
          disableElevation
          onClick={() => onChange("login")}
        >
          Volver
        </Button>
        <Button type="submit" variant="contained" disableElevation>
          Siguiente
        </Button>
      </div>
    </Card>
  );
};

export default Register;
