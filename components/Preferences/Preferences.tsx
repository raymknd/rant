import {
  Button,
  Dialog,
  DialogContent,
  Switch,
  Typography,
} from "@mui/material";
import useThemeSelector from "../../hooks/useThemeSelector";
import styles from "./Preferences.module.sass";

const Preferences = () => {
  const themeSelector = useThemeSelector();
  return (
    <Dialog open sx={{ maxWidth: 878, margin: "0 auto" }} fullWidth>
      <DialogContent>
        <Typography component="div" variant="h6">
          Preferencias
        </Typography>
        <section className={styles.theme}>
          <ul className={styles.options}>
            <li>
              <label htmlFor="blocked-profiles">
                Mostrar perfiles bloqueados
              </label>
              <Switch defaultChecked id="blocked-profiles" />
            </li>
            <li>
              <label htmlFor="y2k-theme" className="disabled">
                Y2K theme
              </label>
              <Switch disabled id="y2k-theme" />
            </li>
            <li>Hola</li>
          </ul>
        </section>
      </DialogContent>
    </Dialog>
  );
};

export default Preferences;
