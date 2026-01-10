import { View } from "react-native";
import { useState } from "react";
import { useHomeMovies } from "../hooks/useHomeMovies";
import { MovieCarousel } from "../components/MovieCarousel";
import { MovieList } from "../components/MovieList";
import { HomeHeader } from "../components/HomeHeader";
import { HomeTabs, HomeTab } from "../components/HomeTabs";
import { Loading } from "../components/Loading";
import { ErrorState } from "../components/ErrorState";
import { useThemeStyles } from "../theme/useThemeStyles";

export default function HomeScreen() {
  const { data, loading, error } = useHomeMovies();
  const [activeTab, setActiveTab] = useState<HomeTab>("Now Playing");
  const { spacing } = useThemeStyles();

  if (loading) return <Loading />;
  if (error || !data) return <ErrorState message={error!} />;

  const moviesMap = {
    "Now Playing": data.nowPlaying,
    Upcoming: data.upcoming,
    "Top Rated": data.topRated,
    Popular: data.popular,
  };

  return (
    <MovieList
      movies={moviesMap[activeTab]}
      ListHeaderComponent={
        <>
          <View style={{ marginBottom: spacing.lg }}>
            <HomeHeader />
          </View>

          <View style={{ marginBottom: spacing.lg }}>
            <MovieCarousel movies={data.nowPlaying.slice(0, 5)} />
          </View>

          <View style={{ marginBottom: spacing.md }}>
            <HomeTabs active={activeTab} onChange={setActiveTab} />
          </View>
        </>
      }
    />
  );
}
