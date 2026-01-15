import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { Movie } from "../types/movie";
import { useThemeStyles } from "../theme/useThemeStyles";

interface Props {
  movie: Movie;
  onPress?: () => void;
}

export function MovieCard({ movie, onPress }: Props) {
  const navigation = useNavigation<any>();
  const { colors, radius, typography } = useThemeStyles();

  const posterUri = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/300x450?text=No+Image";

  const rating =
    typeof movie.vote_average === "number"
      ? movie.vote_average.toFixed(1)
      : "—";

  function handlePress() {
    if (onPress) {
      onPress();
      return;
    }

    navigation.navigate("MovieDetails", {
      movieId: movie.id,
    });
  }

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.container, { width: 120 }]}
      activeOpacity={0.8}
    >
      <Image
        source={{ uri: posterUri }}
        style={[styles.image, { borderRadius: radius.md }]}
      />

      <Text
        style={[
          styles.title,
          { color: colors.text, fontSize: typography.small },
        ]}
        numberOfLines={2}
      >
        {movie.title}
      </Text>

      <View style={styles.ratingRow}>
        <Ionicons name="star" size={12} color="#F5C518" />
        <Text style={[styles.rating, { color: colors.muted }]}>
          {rating}
        </Text>

        {movie.release_date && (
          <Text style={[styles.year, { color: colors.muted }]}>
            • {movie.release_date.split("-")[0]}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 6,   // 👈 espaçamento lateral entre cartazes
    marginBottom: 16,      // 👈 espaço vertical (igual Figma)
  },
  image: {
    width: "100%",
    aspectRatio: 2 / 3,
    borderRadius: 14,
  },
  title: {
    marginTop: 6,
    fontSize: 13,
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
