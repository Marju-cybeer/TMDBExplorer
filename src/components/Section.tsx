import { View, Text, StyleSheet, FlatList } from "react-native";
import { Movie } from "../types/movie";
import { MovieCard } from "./MovieCard";
import { useThemeStyles } from "../theme/useThemeStyles";

interface Props {
  title: string;
  movies: Movie[];
}

export function Section({ title, movies }: Props) {
  const { colors } = useThemeStyles();

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text }]}>
        {title}
      </Text>
      <FlatList
        data={movies}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MovieCard movie={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
  },
});
