import { View, FlatList, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";

import { SearchInput } from "../components/SearchInput";
import { useSearchMovies } from "../hooks/useSearchMovies";
import { MovieCard } from "../components/MovieCard";

export default function SearchScreen() {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();

  const [query, setQuery] = useState("");

  // 🔥 recebe texto vindo da Home
  useEffect(() => {
    if (route.params?.initialQuery) {
      setQuery(route.params.initialQuery);
    }
  }, [route.params]);

  const { movies } = useSearchMovies(query);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <SearchInput value={query} onChangeText={setQuery} />

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        contentContainerStyle={{ marginTop: 16 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("MovieDetails", { movieId: item.id })
            }
          >
            <MovieCard movie={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
