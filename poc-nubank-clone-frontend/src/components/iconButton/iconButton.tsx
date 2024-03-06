import Image from "next/image";
import clsx from "clsx";
import classes from "./iconButton.module.css";

type IconButtonVariant = "lightPurple" | "lightGray" | "transparent";

export default function IconButton({
  icon,
  title,
  variant = "transparent",
}: {
  icon: string;
  title: string;
  variant?: IconButtonVariant;
}) {
  const classNames = clsx(classes.iconButton, classes[variant]);

  return (
    <button className={classNames}>
      <Image src={icon} alt={title} />
    </button>
  );
}
