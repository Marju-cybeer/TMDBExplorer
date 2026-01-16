// components/ScreenHeader.tsx
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useThemeStyles } from "../theme/useThemeStyles";

export function ScreenHeader({ title }: { title: string }) {
  const navigation = useNavigation();
  const { colors, spacing } = useThemeStyles();

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: spacing.md,
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons
          name="chevron-back"
          size={24}
          color={colors.text}
        />
      </TouchableOpacity>

      <Text
        style={{
          color: colors.text,
          fontSize: 18,
          fontWeight: "600",
          marginLeft: spacing.sm,
        }}
      >
        {title}
      </Text>
    </View>
  );
}
