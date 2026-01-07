import { ScrollView } from "react-native";
import { useHomeMovies } from "../hooks/useHomeMovies";
import { MovieCarousel } from "../components/MovieCarousel";
import { Section } from "../components/Section";
import { Loading } from "../components/Loading";
import { ErrorState } from "../components/ErrorState";

export default function HomeScreen() {
  const { data, loading, error } = useHomeMovies();

  if (loading) return <Loading />;
  if (error || !data) return <ErrorState message={error!} />;

  return (
    <ScrollView>
      <MovieCarousel movies={data.nowPlaying.slice(0, 5)} />
      <Section title="Em Cartaz" movies={data.nowPlaying} />
      <Section title="Próximos" movies={data.upcoming} />
      <Section title="Mais Bem Avaliados" movies={data.topRated} />
      <Section title="Populares" movies={data.popular} />
    </ScrollView>
  );
}
