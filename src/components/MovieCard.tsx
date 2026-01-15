import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Movie } from "../types/movie";
import { useThemeStyles } from "../theme/useThemeStyles";

interface Props {
  movie: Movie;
  onPress?: () => void;
}

export function MovieCard({ movie, onPress }: Props) {
  const { colors } = useThemeStyles();
  const navigation = useNavigation<any>();

  const handlePress = () => {
    if (onPress) {
      onPress();
      return;
    }

    navigation.navigate("MovieDetails", {
      movieId: movie.id,
    });
  };

  const posterUri = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/300x450?text=No+Image";

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.8}
      style={styles.container}
    >
      <Image source={{ uri: posterUri }} style={styles.image} />

      <Text
        style={[styles.title, { color: colors.text }]}
        numberOfLines={1}
      >
        {movie.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 120,
    marginRight: 12,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 12,
  },
  title: {
    marginTop: 6,
    fontSize: 13,
  },
});
