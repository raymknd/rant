import { Typography } from "@mui/material";
import styles from "./Heading.module.sass";
import { IHeadingProps } from "./Heading.types";

const Heading = ({ title, subtitle }: IHeadingProps) => {
  return (
    <section className={styles.root}>
      <Typography variant="h5" component="div">
        {title}
      </Typography>
      {subtitle && <small>{subtitle}</small>}
    </section>
  );
};

export default Heading;
