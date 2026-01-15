import { Switch } from "react-native";
import { useTheme } from "../hooks/useTheme";

export function ThemeToggle() {
  const { mode, toggleTheme } = useTheme();

  return (
    <Switch
      value={mode === "dark"}
      onValueChange={toggleTheme}
    />
  );
}
