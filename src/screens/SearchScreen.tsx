import { useCallback, useEffect, useState } from "react";
import { FlatList, View, ActivityIndicator } from "react-native";
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from "@react-navigation/native";

import { SearchHeader } from "../components/SearchHeader";
import { SearchInput } from "../components/SearchInput";
import { SearchMovieRow } from "../components/SearchMovieRow";
import { EmptyState } from "../components/EmptyState";
import { useSearchMovies } from "../hooks/useSearchMovies";
import { useThemeStyles } from "../theme/useThemeStyles";

export default function SearchScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const { colors } = useThemeStyles();

  const initialQuery = route.params?.query ?? "";
  const [query, setQuery] = useState(initialQuery);
  const { movies, loading } = useSearchMovies(query);

  useEffect(() => {
    if (initialQuery) {
      setQuery(initialQuery);
    }
  }, [initialQuery]);

  useFocusEffect(
    useCallback(() => {
      return () => setQuery("");
    }, [])
  );

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <SearchHeader />

      <View style={{ padding: 16, flex: 1 }}>
        <SearchInput
          value={query}
          onChangeText={setQuery}
          autoFocus
          returnKeyType="search"
        />

        {/* 🔄 Loading */}
        {loading && (
          <View style={{ marginTop: 32 }}>
            <ActivityIndicator size="large" />
          </View>
        )}

        {/* 🔎 Estado vazio da busca */}
        {!loading && query.length > 0 && movies.length === 0 && (
          <EmptyState
            icon="search-outline"
            title="We Are Sorry, We Can Not Find The Movie :("
            subtitle="Find your movie by Type title, categories, years, etc."
          />
        )}

        {/* 📃 Lista de resultados */}
        {!loading && movies.length > 0 && (
          <FlatList
            data={movies}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ marginTop: 16, paddingBottom: 24 }}
            renderItem={({ item }) => (
              <SearchMovieRow
                movie={item}
                onPress={() =>
                  navigation.navigate("MovieDetails", {
                   movieId: movie.id,
                  })
                }
              />
            )}
          />
        )}
      </View>
    </View>
  );
}
