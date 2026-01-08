import { FlatList, View, ActivityIndicator } from "react-native";
import { useFavorites } from "../hooks/useFavorites";
import { MovieCard } from "../components/MovieCard";

export default function WatchlistScreen() {
  const { favorites, loading } = useFavorites();
console.log(favorites)
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <FlatList
      data={favorites}
      keyExtractor={(item) => item.id.toString()}
      numColumns={3}
      contentContainerStyle={{ padding: 8 }}
      renderItem={({ item }) => (
        <MovieCard
          movie={{
            id: item.id,
            title: item.title,
            poster_path: item.poster,
            vote_average: item.rating,
            release_date: item.releaseDate,
            backdrop_path: undefined, // ✅ evita erro de tipagem
          }}
        />
      )}
    />
  );
}
