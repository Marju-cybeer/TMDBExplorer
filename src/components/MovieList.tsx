import { FlatList, StyleSheet } from "react-native";
import { Movie } from "../types/movie";
import { MovieCard } from "./MovieCard";
import { useThemeStyles } from "../theme/useThemeStyles";

interface Props {
  movies: Movie[];
  onPressMovie?: (movie: Movie) => void;
}

export function MovieList({ movies, onPressMovie }: Props) {
  const { spacing } = useThemeStyles();

  return (
    <FlatList
      data={movies}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <MovieCard
          movie={item}
          onPress={() => onPressMovie?.(item)}
        />
      )}
      contentContainerStyle={{
        paddingHorizontal: spacing.md,
        paddingBottom: spacing.xl,
      }}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({});
