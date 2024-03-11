import { FormEvent, useState } from "react";
import IconButton from "@/components/iconButton/iconButton";
import TextField from "@/components/textField/textField";
import arrowRightIcon from "../../../../public/icons/arrow-right-icon.svg";
import classes from "./enterValueStep.module.css";

export default function EnterValueStep({
  onValueEntered,
}: {
  onValueEntered: Function;
}) {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.target as HTMLFormElement;
    const value = formEl.transferValue.value;
    onValueEntered(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <TextField id="transferValue" />
      <IconButton
        icon={arrowRightIcon}
        title="Pagar"
        variant="lightGray"
        className={classes.nextButton}
        type="submit"
      />
    </form>
  );
}
