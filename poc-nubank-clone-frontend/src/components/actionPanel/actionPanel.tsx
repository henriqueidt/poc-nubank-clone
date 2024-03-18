import Image from "next/image";
import classes from "./actionPanel.module.css";

export default function ActionPanel({
  icon,
  title,
  description,
  value,
}: {
  icon: string;
  title: string;
  description: string;
  value: string;
}) {
  return (
    <div className={classes.actionPanel}>
      <Image src={icon} alt={title} className={classes.icon} />
      <h2 className={classes.title}>{title}</h2>
      <div className={classes.description}>{description}</div>
      <div className={classes.value}>{value}</div>
    </div>
  );
}
