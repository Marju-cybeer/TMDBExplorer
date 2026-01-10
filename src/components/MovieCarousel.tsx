<<<<<<< HEAD
import { FlatList, Dimensions, StyleSheet } from "react-native";
import { Movie } from "../types/movie";
import { MovieCarouselItem } from "./MovieCarouselItem";
=======
import { FlatList, Dimensions, Image, StyleSheet } from "react-native";
>>>>>>> be5160fc4ad84b2d703f103a9bf2df6fe611c71f

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width / 2;

export function MovieCarousel({ movies }) {
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
<<<<<<< HEAD
  container: {
    paddingHorizontal: 16,
=======
  image: {
    width,
    height: 220,
>>>>>>> be5160fc4ad84b2d703f103a9bf2df6fe611c71f
  },
});
