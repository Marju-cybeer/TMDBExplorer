import { useEffect, useState } from "react";
import { searchMovies } from "../services/search.service";
import { Movie } from "../types/movie";

export function useSearchMovies(query: string) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handler = setTimeout(async () => {
      if (!query) {
        setMovies([]);
        return;
      }

      try {
        setLoading(true);
        const result = await searchMovies(query);
        setMovies(result);
      } finally {
        setLoading(false);
      }
    }, 500); // debounce 500ms

    return () => clearTimeout(handler);
  }, [query]);

  return { movies, loading };
}
