import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useThemeStyles } from "../theme/useThemeStyles";

export function EmptyState() {
  const { colors } = useThemeStyles();

  return (
    <View style={styles.container}>
      <Ionicons name="search-outline" size={72} color={colors.muted} />
      <Text style={[styles.title, { color: colors.text }]}>
        We Are Sorry, We Can Not Find The Movie :(
      </Text>
      <Text style={[styles.subtitle, { color: colors.muted }]}>
        Find your movie by Type title, categories, years, etc.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 80,
    paddingHorizontal: 24,
  },
  title: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  subtitle: {
    marginTop: 8,
    textAlign: "center",
    fontSize: 13,
  },
});
