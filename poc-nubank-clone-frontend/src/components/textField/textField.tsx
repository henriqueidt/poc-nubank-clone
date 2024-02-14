"use client";
import { useEffect, useRef, useState } from "react";
import classes from "./textField.module.css";

const masks = {
  cpf: (v: string) =>
    v
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1"),
};

export default function TextField({
  label,
  id,
  type = "text",
  mask,
}: {
  label: string;
  id: string;
  type?: "text" | "password";
  mask?: "cpf";
}) {
  const [containerClasses, setContainerClasses] = useState("");
  const onChange = ({ target }: { target: { value: string } }) => {
    if (mask) {
      target.value = masks[mask](target.value);
    }

    if (target.value) {
      setContainerClasses(classes.containerFilled);
    } else {
      setContainerClasses("");
    }
  };

  return (
    <div className={`${classes.container} ${containerClasses}`}>
      <label className={classes.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={classes.input}
        type={type}
        name={id}
        id={id}
        onChange={onChange}
      />
    </div>
  );
}
