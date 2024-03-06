import useAuth from "@/lib/auth/useAuth";
import classes from "./header.module.css";
import IconButton from "../iconButton/iconButton";
import userIcon from "../../../public/icons/user-icon.svg";

export default function Header() {
  const { authState } = useAuth();
  const { user } = authState || {};
  const { name } = user || {};

  return (
    <header className={classes.header}>
      <div>
        <IconButton icon={userIcon} title="usuario" variant="lightPurple" />
      </div>
      Ola, {name}
    </header>
  );
}
