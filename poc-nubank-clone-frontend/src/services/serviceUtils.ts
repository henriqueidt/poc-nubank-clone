import { AuthContextData } from "@/lib/auth/authContext";

const baseUrl = "http://localhost:3000/";

export const fetchResponse = async (
  path: string,
  options: { method?: string; body?: string; headers?: {} } = {}
): Promise<{
  error: {
    message: string;
  };
  data: {};
}> => {
  try {
    const response = await fetch(`${baseUrl}${path}`, {
      ...options,
      headers: {
        ...options.headers,
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      return {
        data: await response.json(),
      };
    }

    const responseJson = await response.json();
    const error = new Error(responseJson.message);

    return { error };
  } catch (error) {
    return { error };
  }
};

export const fetchResponseAuthorized = async (
  path: string,
  auth: AuthContextData,
  options: { method?: string; body?: string; headers?: {} } = {}
) => {
  const { access_token: token } = auth?.authState || {};
  return fetchResponse(path, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    },
  });
};
