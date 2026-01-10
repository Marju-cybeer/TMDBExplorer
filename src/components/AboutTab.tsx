// src/components/AboutTab.tsx
import { ScrollView, Text } from "react-native";
import { useThemeStyles } from "../theme/useThemeStyles";

export function AboutTab({ overview }: { overview: string }) {
  const { colors } = useThemeStyles();

  return (
    <ScrollView style={{ padding: 16 }}>
      <Text style={{ color: colors.text, fontSize: 15 }}>
        {overview}
      </Text>
    </ScrollView>
  );
}
