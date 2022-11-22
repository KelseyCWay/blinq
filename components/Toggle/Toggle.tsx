import { Field } from "formik";
import styles from "./Toggle.module.css";

export const Toggle = (props: React.ComponentPropsWithoutRef<"input">) => (
  <label className={styles.switch}>
    <Field {...props} type="checkbox" />
    <span className={styles.slider}></span>
  </label>
);
