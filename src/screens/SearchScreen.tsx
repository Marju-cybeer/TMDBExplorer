import { useState } from "react";
import { FlatList, View, TouchableOpacity } from "react-native";
import { SearchInput } from "../components/SearchInput";
import { useSearchMovies } from "../hooks/useSearchMovies";
import { MovieCard } from "../components/MovieCard";
import { useNavigation } from "@react-navigation/native";

export default function SearchScreen() {
  const [query, setQuery] = useState("");
  const { movies } = useSearchMovies(query);
  const navigation: any = useNavigation();

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
