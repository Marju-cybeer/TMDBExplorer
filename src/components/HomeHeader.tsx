import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useThemeStyles } from "../theme/useThemeStyles";
import { SearchInput } from "./SearchInput";

export function HomeHeader() {
  const { colors, spacing, typography } = useThemeStyles();

  return (
    <SafeAreaView
      edges={["top"]}
      style={[styles.safe, { backgroundColor: colors.background }]}
    >
      <View style={styles.container}>
        <Text
          numberOfLines={1}          // 🔥 evita quebra de linha
          adjustsFontSizeToFit       // 🔥 adapta em telas menores
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

        <SearchInput
          value=""
          onChangeText={() => {}}
          placeholder="Search"
        />
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