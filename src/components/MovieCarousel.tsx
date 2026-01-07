import { FlatList, Image, StyleSheet, Dimensions } from "react-native";
import { Movie } from "../types/movie";

const { width } = Dimensions.get("window");

interface Props {
  movies: Movie[];
}

export function MovieCarousel({ movies }: Props) {
  return (
    <FlatList
      data={movies}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w780${item.backdrop_path}`,
          }}
          style={styles.image}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width,
    height: 200,
  },
});
