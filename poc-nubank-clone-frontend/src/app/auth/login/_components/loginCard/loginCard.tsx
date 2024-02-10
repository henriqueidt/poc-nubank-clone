import TextField from "@/components/textField/textField";
import classes from "./loginCard.module.css";
import Button from "@/components/button/button";
import Link from "@/components/link/link";

export default function LoginCard() {
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <h1 className={classes.title}>Faça seu login</h1>
      </header>
      <form className={classes.form}>
        <TextField id="cpf-input" label="CPF" />
        <TextField id="password-input" label="password" />
        <Button type="submit">CONTINUAR</Button>
      </form>

      <div className={classes.ctas}>
        <Link href="/forgot-password">Esqueci minha senha</Link>
        <Link href="/forgot-password">Ainda não sou cliente</Link>
      </div>
    </div>
  );
}
