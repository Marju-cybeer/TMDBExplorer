import { useEffect, useState } from "react";
import { getHomeMovies } from "../services/tmdb.service";
import { Movie } from "../types/movie";

export function useHomeMovies() {
  const [data, setData] = useState<{
    nowPlaying: Movie[];
    upcoming: Movie[];
    topRated: Movie[];
    popular: Movie[];
  } | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const response = await getHomeMovies();
        setData(response);
      } catch (err: any) {
        setError(err.message ?? "Erro ao carregar filmes");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return { data, loading, error };
}
