"use client";
import AccountDashboard from "@/components/accountDashboard/accountDashboard";
import Header from "@/components/header/header";
import AuthGuard from "@/lib/auth/authGuard";

export default function Home() {
  return (
    <AuthGuard>
      <Header />
      <AccountDashboard />
    </AuthGuard>
  );
}
