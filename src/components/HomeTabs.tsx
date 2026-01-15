import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useThemeStyles } from "../theme/useThemeStyles";

const tabs = ["Now Playing", "Upcoming", "Top Rated", "Popular"] as const;
export type HomeTab = typeof tabs[number];

interface Props {
  active: HomeTab;
  onChange: (tab: HomeTab) => void;
}

export function HomeTabs({ active, onChange }: Props) {
  const { colors } = useThemeStyles();

  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab}
          onPress={() => onChange(tab)}
          style={[
            styles.tab,
            active === tab && {
              borderBottomColor: colors.primary,
              borderBottomWidth: 2,
            },
          ]}
        >
          <Text
            style={{
              color: active === tab ? colors.primary : colors.muted,
              fontWeight: "500",
            }}
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginTop: 16,
  },
  tab: {
    marginRight: 20,
    paddingBottom: 6,
  },
});
