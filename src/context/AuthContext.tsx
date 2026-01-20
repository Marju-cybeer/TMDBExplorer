import { createContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

export type AuthContextData = {
  signed: boolean;
  loading: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextData | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signed, setSigned] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSession() {
      const token = await SecureStore.getItemAsync("auth_token");
      setSigned(!!token);
      setLoading(false);
    }
    loadSession();
  }, []);

  async function login(username: string, password: string) {
    if (username && password) {
      await SecureStore.setItemAsync("auth_token", "mock-token");
      setSigned(true);
    }
  }

  async function logout() {
    await SecureStore.deleteItemAsync("auth_token");
    setSigned(false);
  }

  return (
    <AuthContext.Provider value={{ signed, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
