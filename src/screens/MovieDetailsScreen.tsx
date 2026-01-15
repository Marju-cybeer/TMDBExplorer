import { useEffect, useState } from "react";
import { View, SafeAreaView } from "react-native";
import { getMovieDetails } from "../services/movie-details.service";
import { MovieHeader } from "../components/MovieHeader";
import { MovieTabs } from "../components/MovieTabs";
import { FavoriteButton } from "../components/FavoriteButton";
import { useFavorites } from "../hooks/useFavorites";

export default function MovieDetailsScreen({ route }: any) {
  const { movieId } = route.params;
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return null;

  const { favorite, toggleFavorite } = useFavorites(movie.id);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0f172a" }}>
      <View style={{ flex: 1 }}>
        
        {/* HEADER COM FAVORITO */}
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

        {/* TABS */}
        <MovieTabs movie={movie} />

      </View>
    </SafeAreaView>
  );
}
