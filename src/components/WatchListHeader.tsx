import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useThemeStyles } from "../theme/useThemeStyles";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  title: string;
};

export function ScreenHeader({ title }: Props) {
  const navigation = useNavigation<any>();
  const { colors, typography } = useThemeStyles();

  return (
    <SafeAreaView edges={["top"]} style={{ backgroundColor: colors.background }}>
      <View style={styles.container}>
        {/* 🔙 Botão voltar */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={24} color={colors.text} />
        </TouchableOpacity>

        {/* 🧠 Título centralizado */}
        <Text
          style={[
            styles.title,
            { color: colors.text, fontSize: typography.medium },
          ]}
          numberOfLines={1}
        >
          {title}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56, // ✅ altura padrão de header (Figma-like)
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  backButton: {
    position: "absolute",
    left: 16,
  },
  title: {
    fontWeight: "600",
  },
});

