import { createContext, useEffect, useState } from "react";
import { themes, Theme, ThemeMode } from "../theme/theme";
import { loadTheme, saveTheme } from "../utils/storage";

interface ThemeContextData {
  theme: Theme;          // ✅ CORRETO
  mode: ThemeMode;
  toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>("dark");

  useEffect(() => {
    loadTheme().then((stored) => {
      if (stored) setMode(stored);
    });
  }, []);

  function toggleTheme() {
    const newTheme: ThemeMode = mode === "dark" ? "light" : "dark";
    setMode(newTheme);
    saveTheme(newTheme);
  }

  return (
    <ThemeContext.Provider
      value={{
        mode,
        theme: themes[mode], // ✅ agora é compatível
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
