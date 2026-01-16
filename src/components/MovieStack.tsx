import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieDetailsScreen from "../screens/MovieDetailsScreen";

const Stack = createNativeStackNavigator();

export function MovieStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MovieDetails"
        component={MovieDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
