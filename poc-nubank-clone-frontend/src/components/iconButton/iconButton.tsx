import Image from "next/image";
import clsx from "clsx";
import classes from "./iconButton.module.css";

type IconButtonVariant = "lightPurple" | "lightGray" | "transparent";

export default function IconButton({
  icon,
  title,
  variant = "transparent",
  isVisibleTitle = false,
}: {
  icon: string;
  title: string;
  variant?: IconButtonVariant;
  isVisibleTitle: boolean;
}) {
  const classNames = clsx(classes.iconButton, classes[variant]);

  return (
    <div className={classes.container}>
      <button className={classNames}>
        <Image src={icon} alt={title} />
      </button>
      {isVisibleTitle ? <div className={classes.title}>{title}</div> : null}
    </div>
  );
}
