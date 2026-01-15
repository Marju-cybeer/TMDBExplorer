import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useThemeStyles } from "../theme/useThemeStyles";

export function HomeHeader() {
  const { colors, typography } = useThemeStyles();
  const navigation = useNavigation<any>();
  const [query, setQuery] = useState("");

  function handleSearch() {
    if (!query.trim()) return;

    navigation.navigate("Search", {
      query: query,
    });

    setQuery(""); // 🔥 limpa o input da Home
  }

  return (
    <SafeAreaView edges={["top"]} style={{ backgroundColor: colors.background }}>
      <View style={styles.container}>
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
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
          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search"
            placeholderTextColor={colors.muted}
            style={[styles.input, { color: colors.text }]}
            returnKeyType="search"
            onSubmitEditing={handleSearch}
          />

          <TouchableOpacity onPress={handleSearch}>
            <Ionicons name="search" size={20} color={colors.muted} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}




const styles = StyleSheet.create({
  safe: {
    paddingBottom: 16,
  },
  container: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  title: {
    fontWeight: "700",
    marginBottom: 16,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 46,
  },
  input: {
    flex: 1,              // 🔥 empurra o ícone para a direita
    fontSize: 14,
    marginRight: 8,
  },
});


