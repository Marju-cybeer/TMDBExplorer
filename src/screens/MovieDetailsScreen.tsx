import { useEffect, useState } from "react";
import { View, SafeAreaView, ActivityIndicator } from "react-native";
import { useRoute } from "@react-navigation/native";

import { getMovieDetails } from "../services/movie-details.service";
import { MovieTabs } from "../components/MovieTabs";
import { DetailsHeader } from "../components/DetailsHeader";
import { useFavorites } from "../hooks/useFavorites";
import { useThemeStyles } from "../theme/useThemeStyles";

export default function MovieDetailsScreen() {
  const route = useRoute<any>();
  const { movieId } = route.params;

  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const { colors } = useThemeStyles();
  const { favorite, toggleFavorite } = useFavorites(movieId);

  useEffect(() => {
    async function loadMovie() {
      const data = await getMovieDetails(movieId);
      setMovie(data);
      setLoading(false);
    }

    loadMovie();
  }, [movieId]);

  if (loading) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.background,
        }}
      >
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  if (!movie) return null;

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <DetailsHeader
        movie={movie}
        favorite={favorite}
        onToggleFavorite={() =>
          toggleFavorite({
            id: movie.id,
            title: movie.title,
            poster: movie.poster_path,
            rating: movie.vote_average,
            releaseDate: movie.release_date,
          })
        }
      />

      <View style={{ flex: 1 }}>
        <MovieTabs movie={movie} />
      </View>
    </View>
  );
}
