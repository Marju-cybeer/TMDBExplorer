import { View, Image, Text, StyleSheet } from "react-native";
import { Movie } from "../types/movie";
import { useThemeStyles } from "../theme/useThemeStyles";

interface Props {
  movie: Movie;
  index: number;
  width: number;
}

export function MovieCarouselItem({ movie, index, width }: Props) {
  const { colors } = useThemeStyles();

  return (
    <View style={[styles.container, { width }]}>
      {/* Número grande */}
      <Text style={[styles.index, { color: colors.primary }]}>
        {index + 1}
      </Text>

      {/* Poster */}
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        }}
        style={styles.poster}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 12,
    justifyContent: "flex-end",
  },
  poster: {
    width: "100%",
    height: 260,
    borderRadius: 20,
  },
  index: {
    position: "absolute",
    left: -10,
    bottom: 20,
    fontSize: 96,
    fontWeight: "800",
    opacity: 0.9,
    zIndex: 10,
  },
});
