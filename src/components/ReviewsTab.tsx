import { useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
} from "react-native";
import { getMovieReviews } from "../services/movie-details.service";
import { useThemeStyles } from "../theme/useThemeStyles";

export function ReviewsTab({ movieId }: { movieId: number }) {
  const [reviews, setReviews] = useState<any[]>([]);
  const { colors } = useThemeStyles();

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  if (!reviews.length) {
    return (
      <Text style={{ color: colors.muted, padding: 16 }}>
        Nenhuma avaliação disponível.
      </Text>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {reviews.map((review) => {
        const avatar =
          review.author_details?.avatar_path
            ? `https://image.tmdb.org/t/p/w185${review.author_details.avatar_path}`
            : "https://via.placeholder.com/40";

        return (
          <View
            key={review.id}
            style={[
              styles.card,
              { backgroundColor: colors.surface },
            ]}
          >
            {/* HEADER */}
            <View style={styles.header}>
              <Image source={{ uri: avatar }} style={styles.avatar} />

              <View style={{ flex: 1 }}>
                <Text
                  style={[
                    styles.author,
                    { color: colors.text },
                  ]}
                >
                  {review.author}
                </Text>

                {review.author_details?.rating && (
                  <Text style={{ color: colors.muted }}>
                    ⭐ {review.author_details.rating}/10
                  </Text>
                )}
              </View>
            </View>

            {/* CONTENT */}
            <Text
              style={[
                styles.content,
                { color: colors.text },
              ]}
            >
              {review.content}
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 32,
  },
  card: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  header: {
    flexDirection: "row",
    marginBottom: 12,
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  author: {
    fontSize: 14,
    fontWeight: "600",
  },
  content: {
    fontSize: 14,
    lineHeight: 20,
  },
});
