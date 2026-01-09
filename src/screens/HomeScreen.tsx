import { useState } from "react";
import { useHomeMovies } from "../hooks/useHomeMovies";
import { MovieCarousel } from "../components/MovieCarousel";
import { MovieList } from "../components/MovieList";
import { HomeHeader } from "../components/HomeHeader";
import { HomeTabs, HomeTab } from "../components/HomeTabs";
import { Loading } from "../components/Loading";
import { ErrorState } from "../components/ErrorState";

export default function HomeScreen() {
  const { data, loading, error } = useHomeMovies();
  const [activeTab, setActiveTab] = useState<HomeTab>("Now Playing");

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
          <HomeHeader />
          <MovieCarousel movies={data.nowPlaying.slice(0, 5)} />
          <HomeTabs active={activeTab} onChange={setActiveTab} />
        </>
      }
    />
  );
}
