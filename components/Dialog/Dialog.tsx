import { useEffect, useRef } from "react";
import styles from "./Dialog.module.css";

interface DialogProps {
  open: boolean;
  onClick: () => void;
  children?: React.ReactNode;
}
export const Dialog = ({ open, onClick, children }: DialogProps) => {
  const ref: any = useRef(null);
  useEffect(() => {
    if (open) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [open]);

  const preventAutoClose = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <dialog ref={ref} onCancel={onClick} onClick={onClick}>
      <div onClick={preventAutoClose} className={styles.container}>
        {children}
      </div>
    </dialog>
  );
};
