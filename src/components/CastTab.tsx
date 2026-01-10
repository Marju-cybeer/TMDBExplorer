// src/components/CastTab.tsx
import { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { getMovieCast } from "../services/movie-details.service";
import { useThemeStyles } from "../theme/useThemeStyles";

export function CastTab({ movieId }: { movieId: number }) {
  const [cast, setCast] = useState<any[]>([]);
  const { colors } = useThemeStyles();

  useEffect(() => {
    getMovieCast(movieId).then(setCast);
  }, []);

  return (
    <FlatList
      data={cast}
      horizontal
      keyExtractor={(item) => item.cast_id.toString()}
      renderItem={({ item }) => (
        <View style={{ width: 120, margin: 12 }}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w185${item.profile_path}`,
            }}
            style={{ width: 100, height: 140, borderRadius: 12 }}
          />
          <Text style={{ color: colors.text }} numberOfLines={1}>
            {item.name}
          </Text>
        </View>
      )}
    />
  );
}
