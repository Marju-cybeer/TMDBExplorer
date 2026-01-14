import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useThemeStyles } from "../theme/useThemeStyles";
import { SearchInput } from "./SearchInput";

export function HomeHeader() {
  const { colors, typography } = useThemeStyles();
  const navigation = useNavigation<any>();

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

        {/* Campo fake que navega */}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Search")}
          style={[
            styles.searchBox,
            { backgroundColor: colors.surface },
          ]}
        >
          <Ionicons name="search" size={18} color={colors.muted} />
          <Text style={[styles.placeholder, { color: colors.muted }]}>
            Search
          </Text>
        </TouchableOpacity>
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
  placeholder: {
  marginLeft: 8,
  fontSize: 14,
}

});
