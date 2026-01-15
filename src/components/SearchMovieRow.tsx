import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Movie } from "../types/movie";
import { useThemeStyles } from "../theme/useThemeStyles";

interface Props {
  movie: Movie;
  onPress: () => void;
}

export function SearchMovieRow({ movie, onPress }: Props) {
  const { colors, typography, radius } = useThemeStyles();

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        }}
        style={[styles.poster, { borderRadius: radius.sm }]}
      />

      <View style={styles.info}>
        <Text
          numberOfLines={2}
          style={[
            styles.title,
            { color: colors.text, fontSize: typography.medium },
          ]}
        >
          {movie.title}
        </Text>

        <View style={styles.row}>
          <Ionicons name="star" size={14} color="#F5C518" />
          <Text style={{ color: colors.muted, marginLeft: 6 }}>
            {movie.vote_average?.toFixed(1) ?? "—"}
          </Text>
        </View>

        <Text style={{ color: colors.muted }}>
          {movie.release_date?.split("-")[0] ?? "—"}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 16,
  },
  poster: {
    width: 90,
    height: 130,
  },
  info: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "600",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
});
