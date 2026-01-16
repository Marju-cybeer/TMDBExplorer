import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useThemeStyles } from "../theme/useThemeStyles";

export function SearchHeader() {
  const navigation = useNavigation<any>();
  const { colors, typography } = useThemeStyles();

  return (
    <SafeAreaView edges={["top"]} style={{ backgroundColor: colors.background }}>
      <View style={styles.container}>
        {/* Voltar */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color={colors.text} />
        </TouchableOpacity>

        {/* Título */}
        <Text
          style={[
            styles.title,
            { color: colors.text, fontSize: typography.medium },
          ]}
        >
          Search
        </Text>

        {/* Info */}
        <TouchableOpacity>
          <Ionicons
            name="information-circle-outline"
            size={22}
            color={colors.text}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  title: {
    fontWeight: "600",
  },
});
