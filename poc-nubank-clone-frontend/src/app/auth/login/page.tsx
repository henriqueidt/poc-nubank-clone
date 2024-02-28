import RootLayout from "@/app/layout";
import LoginCard from "./_components/loginCard/loginCard";
import classes from "./login.module.css";

export default function Page() {
  return (
    <RootLayout>
      <div className={classes.container}>
        <LoginCard />
      </div>
    </RootLayout>
  );
}
