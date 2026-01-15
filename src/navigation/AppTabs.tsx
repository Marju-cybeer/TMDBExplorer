import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchScreen from "../screens/SearchScreen";
import WatchlistScreen from "../screens/WatchlistScreen";
import { useThemeStyles } from "../theme/useThemeStyles";
import { Ionicons } from "@expo/vector-icons";
import { MovieStack } from "./MovieStack";

const Tab = createBottomTabNavigator();

export function AppTabs() {
  const { colors } = useThemeStyles();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.muted,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.muted,
        tabBarIcon: ({ color, size }) => {
          let iconName: any = "home";

          if (route.name === "Home") iconName = "home";
          if (route.name === "Search") iconName = "search";
          if (route.name === "Watchlist") iconName = "bookmark";

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      {/* 🏠 HOME + DETAILS */}
      <Tab.Screen
        name="Home"
        component={MovieStack}
        options={{ title: "Home" }}
      />

      {/* 🔍 SEARCH */}
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{ title: "Search" }}
      />

      {/* ⭐ FAVORITOS */}
      <Tab.Screen
        name="Watchlist"
        component={WatchlistScreen}
        options={{ title: "Watchlist" }}
      />
    </Tab.Navigator>
  );
}
