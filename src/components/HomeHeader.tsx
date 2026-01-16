import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useThemeStyles } from "../theme/useThemeStyles";
import { useAuth } from "../hooks/useAuth";

export function HomeHeader() {
  const { colors, typography } = useThemeStyles();
  const navigation = useNavigation<any>();
  const { signOut } = useAuth(); // 🔐
  const [query, setQuery] = useState("");

  function handleSearch() {
    if (!query.trim()) return;

    navigation.navigate("Search", {
      query: query,
    });

    setQuery("");
  }

  return (
    <SafeAreaView edges={["top"]} style={{ backgroundColor: colors.background }}>
      <View style={styles.container}>
        {/* 🔝 Linha do título + logout */}
        <View style={styles.headerRow}>
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

          <TouchableOpacity onPress={signOut}>
            <Ionicons name="log-out-outline" size={22} color={colors.text} />
          </TouchableOpacity>
        </View>

        {/* 🔍 Search box */}
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
  container: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  title: {
    fontWeight: "700",
    flex: 1,
    marginRight: 12,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 46,
  },
  input: {
    flex: 1,
    fontSize: 14,
    marginRight: 8,
  },
});
