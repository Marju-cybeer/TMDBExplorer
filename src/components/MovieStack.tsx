// MovieStack.tsx
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WatchlistScreen from "../screens/WatchlistScreen";
import MovieDetailsScreen from "../screens/MovieDetailsScreen";

const Stack = createNativeStackNavigator();

export function MovieStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#0F1C26" },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Watchlist"
        component={WatchlistScreen}
        options={{ title: "Watch list" }}
      />

      <Stack.Screen
        name="MovieDetails"
        component={MovieDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
