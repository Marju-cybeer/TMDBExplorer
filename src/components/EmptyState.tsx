import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useThemeStyles } from "../theme/useThemeStyles";

type EmptyStateProps = {
  icon?: keyof typeof Ionicons.glyphMap;
  title: string;
  subtitle?: string;
};

export function EmptyState({
  icon = "alert-circle-outline",
  title,
  subtitle,
}: EmptyStateProps) {
  const { colors } = useThemeStyles();

  return (
    <View style={styles.container}>
      <Ionicons name={icon} size={72} color={colors.muted} />

      <Text style={[styles.title, { color: colors.text }]}>
        {title}
      </Text>

      {subtitle && (
        <Text style={[styles.subtitle, { color: colors.muted }]}>
          {subtitle}
        </Text>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
