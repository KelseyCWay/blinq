import { Cross } from "../Cross";
import { Dialog } from "../Dialog";
import styles from "./DialogContainer.module.css";

interface DialogContainerProps {
  title: string;
  open: boolean;
  children: React.ReactNode;
  handleClick: () => void;
}
export const DialogContainer = ({
  title,
  open,
  children,
  handleClick,
}: DialogContainerProps) => {
  return (
    <Dialog onClick={handleClick} open={open}>
      <div className={styles.content}>
        <Cross onClick={handleClick} />

        <div className={styles.header}>
          <h2>{title}</h2>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </Dialog>
  );
};
