import classes from "./textField.module.css";

export default function TextField({
  label,
  id,
}: {
  label: string;
  id: string;
}) {
  return (
    <div className={classes.container}>
      <label htmlFor={id}>{label}</label>
      <input type="text" name="" id={id} />
    </div>
  );
}
