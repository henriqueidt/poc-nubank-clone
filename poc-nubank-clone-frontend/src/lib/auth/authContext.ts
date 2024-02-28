import { createContext } from "react";

interface AuthContextData {
  authState: {} | null;
  signIn(
    cpf: string,
    password: string
  ): Promise<
    | { error: { message: {} }; authState?: undefined }
    | { authState: any; error?: undefined }
  >;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export default AuthContext;
