import { useState } from "react";
import { FlatList, View, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { SearchInput } from "../components/SearchInput";
import { useSearchMovies } from "../hooks/useSearchMovies";
import { MovieCard } from "../components/MovieCard";

export default function SearchScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  // 🔥 recebe texto vindo da Home (se existir)
  const [query, setQuery] = useState(
    route.params?.initialQuery ?? ""
  );

  const { movies } = useSearchMovies(query);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      {/* ✅ PROP CORRETA */}
      <SearchInput
        value={query}
        onChangeText={setQuery}
      />

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        contentContainerStyle={{ marginTop: 16 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate("MovieDetails", {
                movieId: item.id,
              })
            }
          >
            <MovieCard movie={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
