import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useThemeStyles } from "../theme/useThemeStyles";
import { useNavigation } from "@react-navigation/native";

export function MovieHeader({ movie, children }: any) {
  const { colors } = useThemeStyles();
  const navigation = useNavigation();

  return (
    <View>
      {/* BANNER */}
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`,
          }}
          style={styles.banner}
        />

        {/* OVERLAY */}
        <View style={styles.overlay} />

        {/* AÇÕES */}
        <View style={styles.actions}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>

          {children}
        </View>
      </View>

      {/* INFO */}
      <View style={styles.info}>
        <Text style={[styles.title, { color: colors.text }]}>
          {movie.title}
        </Text>

        <Text style={{ color: colors.muted }}>
          ⭐ {movie.vote_average.toFixed(1)} •{" "}
          {movie.release_date?.split("-")[0]}
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  bannerContainer: {
    position: "relative",
  },
  banner: {
    width: "100%",
    height: 260,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.35)",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  actions: {
    position: "absolute",
    top: 50,
    left: 16,
    right: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  info: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 6,
  },
});
