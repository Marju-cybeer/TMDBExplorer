import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import WatchlistScreen from "../screens/WatchlistScreen";
import { useThemeStyles } from "../theme/useThemeStyles";
import { TabParamList } from "./types";

const Tab = createBottomTabNavigator<TabParamList>();

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
          let iconName: keyof typeof Ionicons.glyphMap;

          switch (route.name) {
            case "Home":
              iconName = "home";
              break;
            case "Search":
              iconName = "search";
              break;
            case "Watchlist":
              iconName = "bookmark";
              break;
            default:
              iconName = "home";
          }

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
