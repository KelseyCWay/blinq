import styles from "./Button.module.css";

export const Button = (props: React.ComponentPropsWithoutRef<"button">) => (
  <button
    className={
      props?.className ? `${props?.className} ${styles.button}` : styles.button
    }
    {...props}
  >
    {props?.children}
  </button>
);
