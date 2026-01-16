import { FlatList, View, ActivityIndicator } from "react-native";
import { useFavorites } from "../hooks/useFavorites";
import { MovieCard } from "../components/MovieCard";
import { EmptyState } from "../components/EmptyState";
import { useThemeStyles } from "../theme/useThemeStyles";

export default function WatchlistScreen() {
  const { favorites, loading } = useFavorites();
  const { colors } = useThemeStyles();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      {/* ⏳ Loading */}
      {loading && (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size="large" />
        </View>
      )}

      {/* ⭐ Estado vazio */}
      {!loading && favorites.length === 0 && (
        <EmptyState
          icon="cube-outline"
          title="There is no movie yet!"
          subtitle="Find your movie by type, title, categories, years, etc."
        />
      )}

      {/* 🎬 Lista */}
      {!loading && favorites.length > 0 && (
      <FlatList
  data={favorites}
  keyExtractor={(item) => item.id.toString()}
  showsVerticalScrollIndicator={false}
  contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 16 }}
  renderItem={({ item }) => (
    <MovieCard
      movie={{
        id: item.id,
        title: item.title,
        poster_path: item.poster,
        vote_average: item.rating,
        release_date: item.releaseDate,
        backdrop_path: undefined,
      }}
    />
  )}
/>

      )}
    </View>
  );
}
