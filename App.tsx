import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";

import { ThemeProvider } from "./src/context/ThemeContext";
import { AuthProvider } from "./src/context/AuthContext";
import { RootNavigator } from "./src/navigation/RootNavigator";
import { initDatabase } from "./src/database";

export default function App() {
  useEffect(() => {
    initDatabase();
  }, []);

  return (
    <AuthProvider>
      <ThemeProvider>
        <StatusBar style="light" backgroundColor="#0F1C26" />
        <RootNavigator />
      </ThemeProvider>
    </AuthProvider>
  );
}
