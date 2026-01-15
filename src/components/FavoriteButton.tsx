import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useThemeStyles } from "../theme/useThemeStyles";

interface Props {
  active: boolean;
  onPress: () => void;
}

export function FavoriteButton({ active, onPress }: Props) {
  const { colors } = useThemeStyles();

  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons
        name={active ? "heart" : "heart-outline"}
        size={28}
        color={active ? colors.primary : colors.text}
      />
    </TouchableOpacity>
  );
}
