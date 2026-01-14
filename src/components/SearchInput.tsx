import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useThemeStyles } from "../theme/useThemeStyles";

interface Props {
  value: string;
  onChange: (text: string) => void;
  placeholder?: string;
}

export function SearchInput({ value, onChange, placeholder }: Props) {
  const { colors } = useThemeStyles();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.surface },
      ]}
    >
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder ?? "Buscar filmes"}
        placeholderTextColor={colors.muted}
        style={[styles.input, { color: colors.text }]}
      />

      <Feather
        name="search"
        size={18}
        color={colors.muted}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 48,
    borderRadius: 14,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1, // 🔥 empurra o ícone para a direita
    fontSize: 14,
  },
});
