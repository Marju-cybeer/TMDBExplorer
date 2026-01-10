import { FlatList, Dimensions, Image, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export function MovieCarousel({ movies }) {
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
    height: 220,
  },
});
