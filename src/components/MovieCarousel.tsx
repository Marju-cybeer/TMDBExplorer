import { FlatList, Dimensions, StyleSheet } from "react-native";
import { Movie } from "../types/movie";
import { MovieCarouselItem } from "./MovieCarouselItem";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width / 2;

interface Props {
  movies: Movie[];
}

export function MovieCarousel({ movies }: Props) {
  return (
    <FlatList
      data={movies.slice(0, 6)} // 🔥 limita a 6
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item, index }) => (
        <MovieCarouselItem
          movie={item}
          index={index}
          width={ITEM_WIDTH}
        />
      )}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});
