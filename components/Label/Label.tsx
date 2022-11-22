import styles from "./Label.module.css";

export const Label = (props: React.ComponentPropsWithoutRef<"label">) => (
  <label {...props} className={styles.label}>
    {props.children}
  </label>
);
