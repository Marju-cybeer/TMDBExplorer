import { FlatList } from "react-native";
import { Movie } from "../types/movie";
import { MovieCard } from "./MovieCard";
import { useThemeStyles } from "../theme/useThemeStyles";
import React, { useCallback } from "react";

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

  const renderItem = useCallback(
    ({ item }: { item: Movie }) => (
      <MovieCard
        movie={item}
        onPress={() => onPressMovie?.(item)}
      />
    ),
    [onPressMovie]
  );

  return (
  <FlatList
    data={movies}
    renderItem={renderItem}
    keyExtractor={(item) => item.id.toString()}
    ListHeaderComponent={ListHeaderComponent}

    numColumns={3}
    columnWrapperStyle={{
      justifyContent: "space-between",
      marginBottom: spacing.md,
    }}

    initialNumToRender={10}
    maxToRenderPerBatch={10}
    windowSize={5}
    removeClippedSubviews

    contentContainerStyle={{
      paddingHorizontal: spacing.md,
      paddingBottom: spacing.xl,
    }}
    showsVerticalScrollIndicator={false}
  />
);

}
