import { View, ActivityIndicator, FlatList } from "react-native";
import { useFavorites } from "../hooks/useFavorites";
import { MovieListItem } from "../components/MovieListItem";
import { EmptyState } from "../components/EmptyState";
import { useThemeStyles } from "../theme/useThemeStyles";
import { useNavigation } from "@react-navigation/native";

export default function WatchlistScreen() {
  const { favorites, loading } = useFavorites();
  const { colors } = useThemeStyles();
  const navigation = useNavigation<any>();

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.background,
        }}
      >
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  if (!favorites.length) {
    return (
      <EmptyState
        icon="bookmark-outline"
        title="Sua watchlist está vazia"
        subtitle="Salve filmes para ver depois ✨"
      />
    );
  }

  return (
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
          onPress={() =>
            navigation.navigate("MovieDetails", {
              movieId: item.id,
            })
          }
        />
      )}
      showsVerticalScrollIndicator={false}
    />
  );
}
