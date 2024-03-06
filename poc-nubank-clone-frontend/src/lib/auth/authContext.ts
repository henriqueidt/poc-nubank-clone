import { createContext } from "react";

interface AuthContextData {
  authState: {
    user: {
      cpf: string;
      name: string;
      balance: number;
    };
    isAuthenticated?: boolean;
    isLoading?: boolean;
  } | null;
  signIn(
    cpf: string,
    password: string
  ): Promise<
    | {
        error: {
          message: string;
        };
        authState?: undefined;
      }
    | { authState: any; error?: undefined }
  >;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export default AuthContext;
