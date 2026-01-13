import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useThemeStyles } from "../theme/useThemeStyles";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

export function SearchInput({ value, onChangeText, placeholder }: Props) {
  const { colors } = useThemeStyles();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.surface},
      ]}
    >
      <TextInput
        style={[styles.input, { color: colors.text }]}
        placeholder={placeholder ?? "Search"}
        placeholderTextColor={colors.muted}
        value={value}
        onChangeText={onChangeText}
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
    height: 44,
    borderRadius: 12,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,            // 🔥 empurra o ícone para a direita
    fontSize: 14,
  },
});
