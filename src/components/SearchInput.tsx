import { TextInput, StyleSheet } from "react-native";
import { useThemeStyles } from "../theme/useThemeStyles";

interface Props {
  value: string;
  onChange: (text: string) => void;
}

export function SearchInput({ value, onChange }: Props) {
  const { colors } = useThemeStyles();

  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      placeholder="Buscar filmes..."
      placeholderTextColor={colors.muted}
      style={[
        styles.input,
        {
          backgroundColor: colors.surface,
          color: colors.text,
          borderColor: colors.muted,
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderRadius: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
  },
});
