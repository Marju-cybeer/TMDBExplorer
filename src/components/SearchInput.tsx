import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TextInputProps,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useThemeStyles } from "../theme/useThemeStyles";

interface Props extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onPressIcon?: () => void;
}

export function SearchInput({
  value,
  onChangeText,
  onPressIcon,
  ...rest
}: Props) {
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
        onChangeText={onChangeText}
        placeholder="Search"
        placeholderTextColor={colors.muted}
        style={[styles.input, { color: colors.text }]}
        {...rest}
      />

      <TouchableOpacity
        onPress={onPressIcon}
        activeOpacity={0.7}
      >
        <Ionicons
          name="search"
          size={20}
          color={colors.muted}
        />
      </TouchableOpacity>
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
    flex: 1,           // 🔥 empurra a lupa para a direita
    fontSize: 14,
    marginRight: 8,
  },
});
