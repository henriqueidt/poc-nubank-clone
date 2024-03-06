"use client";
import TextField from "@/components/textField/textField";
import classes from "./loginCard.module.css";
import Button from "@/components/button/button";
import Link from "@/components/link/link";
import { FormEvent, useState } from "react";
import { fetchResponse } from "@/services/serviceUtils";
import { login } from "@/services/authService";
import { useRouter } from "next/navigation";
import useAuth from "@/lib/auth/useAuth";

export default function LoginCard() {
  const auth = useAuth();
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState("");

  const onLogin = async (e: FormEvent<HTMLFormElement>) => {
    setErrorMessage("");
    e.preventDefault();
    const formEl = e.target as HTMLFormElement;

    const cpf = formEl.cpf.value;
    const password = formEl.password.value;

    const { authState, error } = await auth.signIn(cpf, password);

    if (authState) {
      router.push("/home");
    } else {
      setErrorMessage(error?.message.toString() || "An error occurred");
    }
  };

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <h1 className={classes.title}>Faça seu login</h1>
      </header>
      <form className={classes.form} onSubmit={onLogin}>
        <TextField id="cpf" label="CPF" mask="cpf" />
        <TextField id="password" label="Senha" type="password" />
        <div className={classes.errorMessage}>{errorMessage}</div>
        <Button type="submit">CONTINUAR</Button>
      </form>

      <div className={classes.ctas}>
        <Link href="/forgot-password">Esqueci minha senha</Link>
        <Link href="/forgot-password">Ainda não sou cliente</Link>
      </div>
    </div>
  );
}
