import { FlatList } from "react-native";
import { useFavorites } from "../hooks/useFavorites";
import { MovieCard } from "../components/MovieCard";

export default function WatchlistScreen() {
  const { favorites } = useFavorites();

  return (
    <FlatList
      data={favorites}
      keyExtractor={(item) => item.id.toString()}
      numColumns={3}
      renderItem={({ item }) => (
        <MovieCard
          movie={{
            id: item.id,
            title: item.title,
            poster_path: item.poster,
            vote_average: item.rating,
            release_date: item.releaseDate,
          }}
        />
      )}
    />
  );
}

