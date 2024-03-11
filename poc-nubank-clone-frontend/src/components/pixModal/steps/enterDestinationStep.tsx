import { FormEvent, useState } from "react";
import IconButton from "@/components/iconButton/iconButton";
import TextField from "@/components/textField/textField";
import Button from "@/components/button/button";

export default function EnterDestinationStep({
  onDestinationEntered,
}: {
  onDestinationEntered: Function;
}) {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.target as HTMLFormElement;
    const destination = formEl.cpf.value;
    onDestinationEntered(destination);
  };

  return (
    <form onSubmit={onSubmit}>
      <TextField id="cpf" mask="cpf" />
      <Button type="submit">Transferir para esse CPF</Button>
    </form>
  );
}
