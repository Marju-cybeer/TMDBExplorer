import { createContext, useEffect, useState } from "react";
import { getToken, removeToken, saveToken } from "../utils/AuthStorage";

interface AuthContextData {
  isAuthenticated: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
  loading: boolean;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getToken().then((token) => {
      setIsAuthenticated(!!token);
      setLoading(false);
    });
  }, []);

  async function signIn() {
    // Mock login → qualquer usuário entra
    await saveToken("mock-token");
    setIsAuthenticated(true);
  }

  async function signOut() {
    await removeToken();
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        signIn,
        signOut,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
