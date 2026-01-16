import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { ThemeProvider } from "./src/context/ThemeContext";
import { AuthProvider } from "./src/context/AuthContext";
import { RootStack } from "./src/navigation/RootStack";
import { initDatabase } from "./src/database";

export default function App() {
  useEffect(() => {
    initDatabase();
  }, []);

  return (
    <AuthProvider>
      <ThemeProvider>
        <NavigationContainer>
          <StatusBar style="light" backgroundColor="#0F1C26" />
          <RootStack />
        </NavigationContainer>
      </ThemeProvider>
    </AuthProvider>
  );
}
