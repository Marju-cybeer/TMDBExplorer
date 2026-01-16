import { ScrollView, Text, StyleSheet } from "react-native";
import { useThemeStyles } from "../theme/useThemeStyles";

export function AboutTab({ overview }: { overview: string }) {
  const { colors } = useThemeStyles();

  if (!overview) {
    return (
      <Text style={{ color: colors.muted, padding: 16 }}>
        Sinopse não disponível.
      </Text>
    );
  }

  return (
    <ScrollView
    style={{ backgroundColor: colors.background }}
       contentContainerStyle={[
      styles.container,
      { backgroundColor: colors.background },
    ]}
    showsVerticalScrollIndicator={false}
  >
      <Text
        style={[
          styles.text,
          {
            color: colors.text,
          },
        ]}
      >
        {overview}
      </Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 32,
  },
  text: {
    fontSize: 15,
    lineHeight: 22,
  },
});
