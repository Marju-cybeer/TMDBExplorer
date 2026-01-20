import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useThemeStyles } from "../theme/useThemeStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

type Props = {
  movie: any;
  favorite: boolean;
  onToggleFavorite: () => void;
};

export function DetailsHeader({ movie, favorite, onToggleFavorite }: Props) {
  const navigation = useNavigation();
  const { colors, spacing, radius, typography } = useThemeStyles();
  const insets = useSafeAreaInsets();

  return (
    <View>
      {/* 🔝 Header sólido */}
      <View
        style={[
          styles.topHeader,
          {
            backgroundColor: colors.background,
            paddingTop: insets.top,
            height: 56 + insets.top,
          },
        ]}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={22} color={colors.text} />
        </TouchableOpacity>

        <Text
          style={[
            styles.headerTitle,
            { color: colors.text, fontSize: typography.medium },
          ]}
        >
          Detail
        </Text>

        <TouchableOpacity onPress={onToggleFavorite}>
          <Ionicons
            name={favorite ? "bookmark" : "bookmark-outline"}
            size={22}
            color={colors.text}
          />
        </TouchableOpacity>
      </View>

      {/* 🖼 Backdrop */}
      <Image
        source={{ uri: IMAGE_BASE_URL + movie.backdrop_path }}
        style={styles.backdrop}
      />

      {/* 🎬 Linha do conteúdo (NÃO sobe) */}
      <View
        style={[
          styles.contentRow,
          { paddingHorizontal: spacing.lg },
        ]}
      >
        {/* 🎬 Cartaz (ÚNICO que sobe) */}
        <View style={{ marginTop: -styles.poster.height / 2 }}>
          <Image
            source={{ uri: IMAGE_BASE_URL + movie.poster_path }}
            style={[
              styles.poster,
              { borderRadius: radius.md },
            ]}
          />
        </View>

        {/* 📝 Título (fica abaixo do backdrop) */}
        <View style={[styles.rightContent, { marginLeft: spacing.sm }]}>
          <Text
            style={[
              styles.movieTitle,
              {
                color: colors.text,
                fontSize: typography.heading,
                marginTop: spacing.sm,
              },
            ]}
            numberOfLines={3}
          >
            {movie.title}
          </Text>
        </View>
      </View>

      {/* ℹ️ Infos abaixo do cartaz */}
      <View
        style={[
          styles.infoRow,
          {
            justifyContent: "center",
            marginTop: spacing.xl,
            paddingHorizontal: spacing.lg,
            marginBottom: spacing.xl,
          },
        ]}
      >
        <Ionicons
          name="calendar-outline"
          size={14}
          color={colors.textSecondary}
        />
        <Text style={[styles.infoText, { color: colors.textSecondary }]}>
          {movie.release_date?.split("-")[0]}
        </Text>

        <Ionicons
          name="time-outline"
          size={14}
          color={colors.textSecondary}
          style={{ marginLeft: spacing.lg }}
        />
        <Text style={[styles.infoText, { color: colors.textSecondary }]}>
          {movie.runtime} min
        </Text>

        <Ionicons
          name="film-outline"
          size={14}
          color={colors.textSecondary}
          style={{ marginLeft: spacing.lg }}
        />
        <Text style={[styles.infoText, { color: colors.textSecondary }]}>
          {movie.genres?.[0]?.name}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
  },
  headerTitle: {
    fontWeight: "600",
  },
  backdrop: {
    width: "100%",
    height: 220,
  },
  contentRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  poster: {
    width: 120,
    height: 180,
  },
  rightContent: {
    flex: 1,
    justifyContent: "flex-start",
  },
  movieTitle: {
    fontWeight: "700",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  infoText: {
    fontSize: 12,
    marginLeft: 4,
  },
});
