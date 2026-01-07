import { useTheme } from "../hooks/useTheme";

export function useThemeStyles() {
  const { theme, mode } = useTheme();

  return {
    mode,
    colors: theme.colors,

    spacing: {
      xs: 4,
      sm: 8,
      md: 12,
      lg: 16,
      xl: 24,
    },

    radius: {
      sm: 8,
      md: 12,
      lg: 16,
    },

    typography: {
      small: 12,
      regular: 14,
      medium: 16,
      title: 18,
      heading: 22,
    },
  };
}
