import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "../hooks/useAuth";
import { LoginScreen } from "../screens/LoginScreen";
import { AppTabs } from "../navigation/AppTabs";
import MovieDetailsScreen from "../screens/MovieDetailsScreen";
import { ActivityIndicator, View } from "react-native";

const Stack = createNativeStackNavigator();

export function RootStack() {
  const { signed, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!signed ? (
        <Stack.Screen name="Login" component={LoginScreen} />
      ) : (
        <>
          {/* 🧭 Tabs principais */}
          <Stack.Screen name="App" component={AppTabs} />

          {/* 🎬 Detalhes do filme */}
          <Stack.Screen
            name="MovieDetails"
            component={MovieDetailsScreen}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
