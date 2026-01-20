export type ThemeMode = "light" | "dark";

export interface Theme {
  mode: ThemeMode;
  colors: {
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    primary: string;
    muted: string;
  };
}

import { lightTheme } from "./light";
import { darkTheme } from "./dark";

export const themes: Record<ThemeMode, Theme> = {
  light: lightTheme,
  dark: darkTheme,
};
