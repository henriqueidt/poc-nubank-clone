import { ButtonHTMLAttributes, ReactNode } from "react";
import classes from "./button.module.css";

export default function Button({
  children,
  type,
}: {
  children: ReactNode;
  type: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}) {
  return (
    <button type={type} className={classes.button}>
      {children}
    </button>
  );
}
