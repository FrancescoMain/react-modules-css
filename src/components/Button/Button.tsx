import { ReactNode } from "react";
import styles from "./Button.module.css";

interface Props {
  children: ReactNode;
}

const button = ({ children }: Props) => {
  return (
    <button className={[styles.btn, styles.btnPrimary].join(" ")}>
      {children}
    </button>
  );
};

export default button;
