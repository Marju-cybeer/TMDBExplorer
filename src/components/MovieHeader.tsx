import { View, Image, Text, StyleSheet } from "react-native";
import { useThemeStyles } from "../theme/useThemeStyles";

export function MovieHeader({ movie }: any) {
  const { colors } = useThemeStyles();

  return (
    <View>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`,
        }}
        style={styles.banner}
      />

      <View style={styles.info}>
        <Text style={[styles.title, { color: colors.text }]}>
          {movie.title}
        </Text>
        <Text style={{ color: colors.muted }}>
          ⭐ {movie.vote_average} • {movie.release_date}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    width: "100%",
    height: 220,
  },
  info: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 6,
  },
});
