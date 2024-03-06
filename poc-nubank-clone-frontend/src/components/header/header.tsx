import useAuth from "@/lib/auth/useAuth";
import classes from "./header.module.css";

export default function Header() {
  const { authState } = useAuth();
  const { user } = authState || {};
  const { name } = user || {};

  return <header className={classes.header}>Ola, {name}</header>;
}
