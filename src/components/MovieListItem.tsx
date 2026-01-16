import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useThemeStyles } from "../theme/useThemeStyles";

type Props = {
  movie: {
    id: number;
    title: string;
    poster: string;
    rating: number;
    year?: string;
    runtime?: number;
  };
  onPress?: () => void;
  onPressRightIcon?: () => void;
};

export function MovieListItem({
  movie,
  onPress,
  onPressRightIcon,
}: Props) {
  const { colors, spacing } = useThemeStyles();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        padding: spacing.md,
        alignItems: "center",
      }}
    >
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie.poster}`,
        }}
        style={{
          width: 60,
          height: 90,
          borderRadius: 8,
          backgroundColor: colors.surface,
        }}
      />

      <View style={{ flex: 1, marginLeft: spacing.md }}>
        <Text
          style={{
            color: colors.text,
            fontWeight: "600",
            marginBottom: 4,
          }}
          numberOfLines={1}
        >
          {movie.title}
        </Text>

        <Text style={{ color: colors.muted, fontSize: 12 }}>
          ⭐ {movie.rating} • {movie.year}
        </Text>

        {movie.runtime && (
          <Text style={{ color: colors.muted, fontSize: 12 }}>
            ⏱ {movie.runtime} min
          </Text>
        )}
      </View>

      <TouchableOpacity onPress={onPressRightIcon}>
        <Ionicons
          name="trash-outline"
          size={22}
          color={colors.primary}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
