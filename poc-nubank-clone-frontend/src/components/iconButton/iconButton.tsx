import { MouseEventHandler, ButtonHTMLAttributes } from "react";
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
  className,
  type = "button",
}: {
  icon: string;
  title: string;
  variant?: IconButtonVariant;
  isVisibleTitle?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
}) {
  const classNames = clsx(classes.iconButton, classes[variant], className);

  return (
    <div className={classes.container}>
      <button className={classNames} onClick={onClick} type={type}>
        <Image src={icon} alt={title} />
      </button>
      {isVisibleTitle ? <div className={classes.title}>{title}</div> : null}
    </div>
  );
}
