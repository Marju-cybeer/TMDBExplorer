import { useCallback, useEffect, useState } from "react";
import { FlatList, View } from "react-native";
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

  // 🔥 query inicial vinda da Home
  const initialQuery = route.params?.query ?? "";

  const [query, setQuery] = useState(initialQuery);
  const { movies, loading } = useSearchMovies(query);

  // 🔄 atualiza se vier nova query pela navegação
  useEffect(() => {
    if (initialQuery) {
      setQuery(initialQuery);
    }
  }, [initialQuery]);

  // 🧹 limpa o input ao sair da tela
  useFocusEffect(
    useCallback(() => {
      return () => {
        setQuery("");
      };
    }, [])
  );

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      {/* 🔝 Header igual ao Figma */}
      <SearchHeader />

      <View style={{ padding: 16 }}>
        <SearchInput
          value={query}
          onChangeText={setQuery}
          autoFocus
          returnKeyType="search"
        />

        {/* 🔎 estado vazio */}
        {!loading && query.length > 0 && movies.length === 0 && (
          <EmptyState />
        )}

        <FlatList
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ marginTop: 16, paddingBottom: 24 }}
          renderItem={({ item }) => (
            <SearchMovieRow
              movie={item}
              onPress={() =>
                navigation.navigate("MovieDetails", {
                  movieId: item.id,
                })
              }
            />
          )}
        />
      </View>
    </View>
  );
}
