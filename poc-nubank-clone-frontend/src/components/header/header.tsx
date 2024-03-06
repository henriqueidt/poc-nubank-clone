import useAuth from "@/lib/auth/useAuth";
import classes from "./header.module.css";
import IconButton from "../iconButton/iconButton";
import userIcon from "../../../public/icons/user-icon.svg";
import eyeClosedIcon from "../../../public/icons/eye-closed-icon.svg";
import questionIcon from "../../../public/icons/question-icon.svg";
import messageIcon from "../../../public/icons/message-icon.svg";

export default function Header() {
  const { authState } = useAuth();
  const { user } = authState || {};
  const { name } = user || {};

  return (
    <header className={classes.header}>
      <div className={classes.topRegion}>
        <IconButton icon={userIcon} title="usuario" variant="lightPurple" />
        <div>
          <IconButton icon={eyeClosedIcon} title="visibilidade" />
          <IconButton icon={questionIcon} title="perguntas" />
          <IconButton icon={messageIcon} title="mensagem" />
        </div>
      </div>
      Olá, {name}
    </header>
  );
}
