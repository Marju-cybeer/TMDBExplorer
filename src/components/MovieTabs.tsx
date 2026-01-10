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
        tabBarStyle: { backgroundColor: colors.surface },
        tabBarIndicatorStyle: { backgroundColor: colors.primary },
        tabBarLabelStyle: { fontWeight: "600" },
      }}
    >
      <Tab.Screen name="About">
        {() => <AboutTab overview={movie.overview} />}
      </Tab.Screen>
      <Tab.Screen name="Reviews">
        {() => <ReviewsTab movieId={movie.id} />}
      </Tab.Screen>
      <Tab.Screen name="Cast">
        {() => <CastTab movieId={movie.id} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
