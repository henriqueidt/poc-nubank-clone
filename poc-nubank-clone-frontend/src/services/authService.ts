import { fetchResponse } from "./serviceUtils";

export const login = async (cpf: string, password: string) => {
  return fetchResponse("auth/login", {
    method: "POST",
    body: JSON.stringify({ cpf, password }),
  });
};
