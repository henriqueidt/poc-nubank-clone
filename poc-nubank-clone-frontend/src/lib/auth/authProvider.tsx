import React, { useState } from "react";
import AuthContext from "./authContext";
import { login } from "@/services/authService";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authState, setAuthState] = useState(null);

  const signIn = async (cpf: string, password: string) => {
    const { data, error } = await login(cpf, password);

    if (error) {
      return { error };
    }

    const authState = {
      ...data,
      isAuthenticated: true,
      isLoading: false,
    };

    setAuthState(authState);

    return { authState };
  };

  return (
    <AuthContext.Provider value={{ authState, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
