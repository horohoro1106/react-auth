import { PropsWithChildren } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export function Button({ children, onClick }: PropsWithChildren<ButtonProps>) {
  return (
    <button onClick={onClick} type="submit" className={styles.btn}>
      {children}
    </button>
  );
}
