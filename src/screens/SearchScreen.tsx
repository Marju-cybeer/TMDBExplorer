import { useState } from "react";
import { FlatList, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { SearchInput } from "../components/SearchInput";
import { useSearchMovies } from "../hooks/useSearchMovies";
import { SearchMovieRow } from "../components/SearchMovieRow";
import { EmptyState } from "../components/EmptyState";

export default function SearchScreen() {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();

  const [query, setQuery] = useState("");
  const { movies, loading } = useSearchMovies(query);
  const navigation: any = useNavigation();

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <SearchInput value={query} onChangeText={setQuery} />

      {/* 🔎 Estado vazio (quando digitou e não achou nada) */}
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
  );
}
