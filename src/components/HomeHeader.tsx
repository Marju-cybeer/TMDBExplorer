import { View, Text, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useThemeStyles } from "../theme/useThemeStyles";

export function HomeHeader() {
  const { colors, spacing, typography } = useThemeStyles();

  return (
    <SafeAreaView
      edges={["top"]}
      style={[styles.safe, { backgroundColor: colors.surface }]}
    >
      <View style={styles.container}>
        <Text
          style={[
            styles.title,
            {
              color: colors.text,
              fontSize: typography.heading,
            },
          ]}
        >
          What do you want to watch?
        </Text>

        <View
          style={[
            styles.searchBox,
            { backgroundColor: colors.background },
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    paddingBottom: 16, // espaço antes do carrossel
  },
  container: {
    paddingHorizontal: 16,
    paddingTop: 8, // respiro do topo (figma)
  },
  title: {
    fontWeight: "700",
    marginBottom: 16,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 14,
    paddingHorizontal: 12,
    height: 46,
  },
  input: {
    marginLeft: 8,
    flex: 1,
    fontSize: 14,
  },
});
