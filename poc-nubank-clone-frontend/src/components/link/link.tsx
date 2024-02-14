import { ReactNode } from "react";
import classes from "./link.module.css";

export default function Link({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a href={href} className={classes.link}>
      {children} &#62;
    </a>
  );
}
