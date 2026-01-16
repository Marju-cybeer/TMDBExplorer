import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import WatchlistScreen from "../screens/WatchlistScreen";
import { useThemeStyles } from "../theme/useThemeStyles";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export function AppTabs() {
  const { colors } = useThemeStyles();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.surface,
        },
        tabBarIcon: ({ color, size }) => {
          const icons: any = {
            Home: "home",
            Search: "search",
            Watchlist: "bookmark",
          };

          return (
            <Ionicons
              name={icons[route.name]}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Watchlist" component={WatchlistScreen} />
    </Tab.Navigator>
  );
}
