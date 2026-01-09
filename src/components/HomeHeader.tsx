import { View, Text, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useThemeStyles } from "../theme/useThemeStyles";

export function HomeHeader() {
  const { colors, spacing, typography } = useThemeStyles();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text
        style={[
          styles.title,
          { color: colors.text, fontSize: typography.heading },
        ]}
      >
        What do you want to watch?
      </Text>

      <View
        style={[
          styles.searchBox,
          { backgroundColor: colors.surface },
        ]}
      >
        <Ionicons name="search" size={18} color={colors.muted} />
        <TextInput
          placeholder="Search"
          placeholderTextColor={colors.muted}
          style={[styles.input, { color: colors.text }]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  title: {
    fontWeight: "600",
    marginBottom: 12,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 44,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
});
