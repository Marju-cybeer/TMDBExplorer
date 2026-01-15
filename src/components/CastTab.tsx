import { useEffect, useState } from "react";
import { FlatList, Image, Text, View, StyleSheet } from "react-native";
import { getMovieCast } from "../services/movie-details.service";
import { useThemeStyles } from "../theme/useThemeStyles";

export function CastTab({ movieId }: { movieId: number }) {
  const [cast, setCast] = useState<any[]>([]);
  const { colors } = useThemeStyles();

  useEffect(() => {
    getMovieCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <FlatList
      data={cast}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.cast_id?.toString()}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => {
        const imageUri = item.profile_path
          ? `https://image.tmdb.org/t/p/w185${item.profile_path}`
          : "https://via.placeholder.com/100x100?text=No+Image";

        return (
          <View style={styles.card}>
            <Image source={{ uri: imageUri }} style={styles.image} />

            <Text
              style={[styles.name, { color: colors.text }]}
              numberOfLines={1}
            >
              {item.name}
            </Text>

            <Text
              style={[styles.character, { color: colors.muted }]}
              numberOfLines={1}
            >
              {item.character}
            </Text>
          </View>
        );
      }}
    />
  );
}
const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  card: {
    width: 100,
    alignItems: "center",
    marginRight: 16,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  name: {
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
  },
  character: {
    fontSize: 12,
    textAlign: "center",
  },
});
