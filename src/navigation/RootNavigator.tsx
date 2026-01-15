import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useAuth } from "../hooks/useAuth";
import { AuthStack } from "./AuthStack";
import { AppTabs } from "./AppTabs";
import { Loading } from "../components/Loading";
import SearchScreen from "../screens/SearchScreen";
import MovieDetailsScreen from "../screens/MovieDetailsScreen";

const Stack = createNativeStackNavigator();

export function RootNavigator() {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <>
            {/* Tabs principais */}
            <Stack.Screen name="App" component={AppTabs} />
             <Stack.Screen
             name="MovieDetails"
             component={MovieDetailsScreen}
  />
            {/* 🔍 Search fora das tabs */}
            <Stack.Screen
              name="Search"
              component={SearchScreen}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <Stack.Screen name="Auth" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
