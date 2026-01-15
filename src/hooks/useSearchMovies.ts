import { useEffect, useState } from "react";
import { searchMovies } from "../services/search.service";
import { Movie } from "../types/movie";

export function useSearchMovies(query: string) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // 🔥 evita busca com string vazia ou só espaços
    if (!query.trim()) {
      setMovies([]);
      return;
    }

    const handler = setTimeout(async () => {
      try {
        setLoading(true);
        const result = await searchMovies(query.trim());
        setMovies(result);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
        setMovies([]);
      } finally {
        setLoading(false);
      }
    }, 500); // debounce

    return () => clearTimeout(handler);
  }, [query]);

  return { movies, loading };
}
