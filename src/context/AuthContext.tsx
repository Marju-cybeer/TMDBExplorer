import { createContext, useEffect, useState } from "react";
import { getToken, removeToken, saveToken } from "../utils/AuthStorage";

interface AuthContextData {
  isAuthenticated: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  async function resetAndLoad() {
    await removeToken(); // 🔥 força limpar token salvo
    const token = await getToken();
    setIsAuthenticated(!!token);
    setLoading(false);
  }

  resetAndLoad();
}, []);


  // 🔐 Login mockado
  async function signIn() {
    setLoading(true);
    try {
      await saveToken("mock-token");
      setIsAuthenticated(true);
    } finally {
      setLoading(false);
    }
  }

  // 🚪 Logout
  async function signOut() {
    setLoading(true);
    try {
      await removeToken();
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
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
