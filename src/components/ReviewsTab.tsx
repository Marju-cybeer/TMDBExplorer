// src/components/ReviewsTab.tsx
import { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import { getMovieReviews } from "../services/movie-details.service";
import { useThemeStyles } from "../theme/useThemeStyles";

export function ReviewsTab({ movieId }: { movieId: number }) {
  const [reviews, setReviews] = useState<any[]>([]);
  const { colors } = useThemeStyles();

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, []);

  return (
    <ScrollView style={{ padding: 16 }}>
      {reviews.map((review) => (
        <Text
          key={review.id}
          style={{ color: colors.text, marginBottom: 16 }}
        >
          {review.content}
        </Text>
      ))}
    </ScrollView>
  );
}
