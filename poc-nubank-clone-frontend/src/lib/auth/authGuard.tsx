import React, { useEffect } from "react";
import useAuth from "./useAuth";
import { useRouter } from "next/navigation";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { authState } = useAuth();
  const router = useRouter();
  const { isAuthenticated } = authState || {};

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth/login");
    }
  }, [isAuthenticated, router]);

  return children;
}
