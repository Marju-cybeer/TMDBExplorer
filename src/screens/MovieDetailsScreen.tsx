import { useEffect, useState } from "react";
import { View, SafeAreaView, ActivityIndicator } from "react-native";
import { useRoute } from "@react-navigation/native";

import { getMovieDetails } from "../services/movie-details.service";
import { MovieHeader } from "../components/MovieHeader";
import { MovieTabs } from "../components/MovieTabs";
import { FavoriteButton } from "../components/FavoriteButton";
import { useFavorites } from "../hooks/useFavorites";
import { useThemeStyles } from "../theme/useThemeStyles";

export default function MovieDetailsScreen() {
  const route = useRoute<any>();
  const { movieId } = route.params;

  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const { colors } = useThemeStyles();

  useEffect(() => {
    async function loadMovie() {
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.error("Erro ao carregar detalhes do filme", error);
      } finally {
        setLoading(false);
      }
    }

    loadMovie();
  }, [movieId]);

  // ⏳ Loading
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

  const { favorite, toggleFavorite } = useFavorites(movie.id);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={{ flex: 1 }}>
        {/* 🎬 HEADER COM FAVORITO */}
        <MovieHeader movie={movie}>
          <FavoriteButton
            active={favorite}
            onPress={() =>
              toggleFavorite({
                id: movie.id,
                title: movie.title,
                poster: movie.poster_path,
                rating: movie.vote_average,
                releaseDate: movie.release_date,
              })
            }
          />
        </MovieHeader>

        {/* 📑 TABS */}
        <MovieTabs movie={movie} />
      </View>
    </SafeAreaView>
  );
}
