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
    
  };
  onPress?: () => void;
  onPressRightIcon?: () => void;
};

export function MovieListItem({ movie, onPress }: Props) {
  const { colors, spacing } = useThemeStyles();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        padding: spacing.md,
      }}
    >
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie.poster}`,
        }}
        style={{
          width: 70,
          height: 100,
          borderRadius: 10,
          backgroundColor: colors.background,
        }}
      />

      <View style={{ flex: 1, marginLeft: spacing.md }}>
        <Text
          style={{
            color: colors.text,
            fontWeight: "600",
            marginBottom: 6,
          }}
          numberOfLines={1}
        >
          {movie.title}
        </Text>

       <Text style={{ color: colors.muted, fontSize: 12 }}>
  ⭐ {movie.rating.toFixed(1)}
  {movie.year ? ` • ${movie.year}` : ""}
</Text>

      </View>
    </TouchableOpacity>
  );
}

