import { useEffect, useState } from "react";
import { View } from "react-native";
import { getMovieDetails } from "../services/movie-details.service";
import { MovieHeader } from "../components/MovieHeader";
import { MovieTabs } from "../components/MovieTabs";

export default function MovieDetailsScreen({ route }: any) {
  const { movieId } = route.params;
  const [movie, setMovie] = useState<any>(null);

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
