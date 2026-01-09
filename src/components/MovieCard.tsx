import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Movie } from "../types/movie";
import { useThemeStyles } from "../theme/useThemeStyles";

interface Props {
  movie: Movie;
  onPress?: () => void;
}

export function MovieCard({ movie, onPress }: Props) {
  const { colors, spacing, radius, typography } = useThemeStyles();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { width: 120 }]}
      activeOpacity={0.8}
    >
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        }}
        style={[styles.image, { borderRadius: radius.md }]}
      />

      <Text
        style={[
          styles.title,
          {
            color: colors.text,
            fontSize: typography.small,
          },
        ]}
        numberOfLines={2}
      >
        {movie.title}
      </Text>

      <View style={styles.ratingRow}>
        <Ionicons name="star" size={12} color="#F5C518" />
        <Text
          style={[
            styles.rating,
            { color: colors.muted, fontSize: typography.small },
          ]}
        >
          {movie.vote_average.toFixed(1)}
        </Text>

        <Text
          style={[
            styles.year,
            { color: colors.muted, fontSize: typography.small },
          ]}
        >
          • {movie.release_date?.split("-")[0]}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 12,
  },
  image: {
    width: "100%",
    height: 180,
  },
  title: {
    marginTop: 6,
    fontWeight: "500",
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  rating: {
    marginLeft: 4,
  },
  year: {
    marginLeft: 6,
  },
});
