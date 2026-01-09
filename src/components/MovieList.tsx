import { FlatList } from "react-native";
import { Movie } from "../types/movie";
import { MovieCard } from "./MovieCard";
import { useThemeStyles } from "../theme/useThemeStyles";
import React from "react";

interface Props {
  movies: Movie[];
  onPressMovie?: (movie: Movie) => void;
  ListHeaderComponent?: React.ReactElement;
}

export function MovieList({
  movies,
  onPressMovie,
  ListHeaderComponent,
}: Props) {
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
      ListHeaderComponent={ListHeaderComponent}
      contentContainerStyle={{
        paddingHorizontal: spacing.md,
        paddingBottom: spacing.xl,
      }}
      showsVerticalScrollIndicator={false}
    />
  );
}
