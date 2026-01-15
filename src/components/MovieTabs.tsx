import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { AboutTab } from "./AboutTab";
import { ReviewsTab } from "./ReviewsTab";
import { CastTab } from "./CastTab";
import { useThemeStyles } from "../theme/useThemeStyles";

const Tab = createMaterialTopTabNavigator();

export function MovieTabs({ movie }: any) {
  const { colors } = useThemeStyles();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.surface,
          elevation: 0,
        },
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
          height: 3,
          borderRadius: 3,
        },
        tabBarLabelStyle: {
          fontWeight: "700",
          fontSize: 13,
          textTransform: "none",
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.muted,
        tabBarPressColor: "transparent",
        tabBarItemStyle: {
          height: 48,
        },
      }}
    >
      <Tab.Screen
        name="About"
        children={() => <AboutTab overview={movie.overview} />}
      />

      <Tab.Screen
        name="Reviews"
        children={() => <ReviewsTab movieId={movie.id} />}
      />

      <Tab.Screen
        name="Cast"
        children={() => <CastTab movieId={movie.id} />}
      />
    </Tab.Navigator>
  );
}
