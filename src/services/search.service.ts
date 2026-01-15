import { api } from "./api";
import { Movie } from "../types/movie";

export async function searchMovies(query: string): Promise<Movie[]> {
  if (!query) return [];

  const { data } = await api.get("/search/movie", {
    params: {
      query,
      include_adult: false,
      language: "pt-BR",
      page: 1,
    },
  });

  return data.results;
}
