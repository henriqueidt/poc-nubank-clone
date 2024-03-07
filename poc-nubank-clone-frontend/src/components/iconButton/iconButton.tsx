import { MouseEventHandler } from "react";
import Image from "next/image";
import clsx from "clsx";
import classes from "./iconButton.module.css";

type IconButtonVariant = "lightPurple" | "lightGray" | "transparent";

export default function IconButton({
  icon,
  title,
  variant = "transparent",
  isVisibleTitle = false,
  onClick,
}: {
  icon: string;
  title: string;
  variant?: IconButtonVariant;
  isVisibleTitle?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  const classNames = clsx(classes.iconButton, classes[variant]);

  return (
    <div className={classes.container}>
      <button className={classNames} onClick={onClick}>
        <Image src={icon} alt={title} />
      </button>
      {isVisibleTitle ? <div className={classes.title}>{title}</div> : null}
    </div>
  );
}
