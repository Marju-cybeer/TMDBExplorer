import { useState, useEffect } from "react";
import { FlatList, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { SearchHeader } from "../components/SearchHeader";
import { SearchInput } from "../components/SearchInput";
import { SearchMovieRow } from "../components/SearchMovieRow";
import { EmptyState } from "../components/EmptyState";
import { useSearchMovies } from "../hooks/useSearchMovies";
import { useThemeStyles } from "../theme/useThemeStyles";

export default function SearchScreen() {
  const navigation = useNavigation<any>();
  const { colors } = useThemeStyles();

  const [query, setQuery] = useState(route.params?.query ?? "");
  const { movies, loading } = useSearchMovies(query);

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <SearchHeader />

      <View style={{ padding: 16 }}>
        <SearchInput value={query} onChangeText={setQuery} />

        {!loading && query.length > 0 && movies.length === 0 && (
          <EmptyState />
        )}

        <FlatList
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ marginTop: 16 }}
          renderItem={({ item }) => (
            <SearchMovieRow
              movie={item}
              onPress={() =>
                navigation.navigate("MovieDetails", { movieId: item.id })
              }
            />
          )}
        />
      </View>
    </View>
  );
}
