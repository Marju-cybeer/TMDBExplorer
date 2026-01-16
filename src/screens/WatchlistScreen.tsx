import { FlatList, View, ActivityIndicator } from "react-native";
import { useFavorites } from "../hooks/useFavorites";
import { MovieListItem } from "../components/MovieListItem";
import { EmptyState } from "../components/EmptyState";
import { ScreenHeader } from "../components/WatchListHeader";
import { useThemeStyles } from "../theme/useThemeStyles";

export default function WatchlistScreen() {
  const { favorites, loading } = useFavorites();
  const { colors } = useThemeStyles();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  if (!favorites.length) {
    return (
      <>
        <ScreenHeader title="Watch list" />
        <EmptyState
          icon="bookmark-outline"
          title="There is no movie yet!"
          subtitle="Find your movie by type, title, categories, years, etc."
        />
      </>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <ScreenHeader title="Watch list" />

      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MovieListItem
            movie={{
              id: item.id,
              title: item.title,
              poster: item.poster,
              rating: item.rating,
               year: item.releaseDate?.split("-")[0],
            }}
          />
        )}
      />
    </View>
  );
}
