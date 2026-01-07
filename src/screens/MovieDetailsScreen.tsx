import { useEffect, useState } from "react";
import { View } from "react-native";
import { getMovieDetails } from "../services/movie-details.service";
import { MovieHeader } from "../components/MovieHeader";
import { MovieTabs } from "../components/MovieTabs";
import { FavoriteButton } from "../components/FavoriteButton";
import { useFavorites } from "../hooks/useFavorites";

export default function MovieDetailsScreen({ route }: any) {
  const { movieId } = route.params;
  const [movie, setMovie] = useState<any>(null);
  const { favorite, toggleFavorite } = useFavorites(movie.id);
 

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
  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, []);

  if (!movie) return null;

  return (
    <View style={{ flex: 1 }}>
      <MovieHeader movie={movie} />
      <MovieTabs movie={movie} />
    </View>
  );
}
