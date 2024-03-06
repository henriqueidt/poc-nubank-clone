"use client";
import LoginCard from "./_components/loginCard/loginCard";
import classes from "./login.module.css";

export default function Page() {
  return (
    <div className={classes.container}>
      <LoginCard />
    </div>
  );
}
