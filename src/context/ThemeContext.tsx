import { createContext, useEffect, useState } from "react";
import { themes } from "../theme/theme";
import { loadTheme, saveTheme } from "../utils/storage";

type ThemeMode = "light" | "dark";

interface ThemeContextData {
  theme: typeof themes.light;
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
    const newTheme = mode === "dark" ? "light" : "dark";
    setMode(newTheme);
    saveTheme(newTheme);
  }

  return (
    <ThemeContext.Provider
      value={{
        mode,
        theme: themes[mode],
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
