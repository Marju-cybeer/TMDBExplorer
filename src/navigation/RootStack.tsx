import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "../hooks/useAuth";
import { AppTabs } from "./AppTabs";
import MovieDetailsScreen from "../screens/MovieDetailsScreen";
import { AuthStack } from "./AuthStack";
import { Loading } from "../components/Loading";

const Stack = createNativeStackNavigator();

export function RootStack() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuthenticated ? (
        <>
          <Stack.Screen name="Tabs" component={AppTabs} />
          <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
        </>
      ) : (
        <Stack.Screen name="Auth" component={AuthStack} />
      )}
    </Stack.Navigator>
  );
}
