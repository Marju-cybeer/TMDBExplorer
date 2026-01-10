import { api } from "./api";
import { Movie } from "../types/movie";

export async function searchMovies(query: string) {
  if (!query) return [];

  const { data } = await api.get("/search/movie", {
    params: {
      query,
      include_adult: false,
    },
  });

  return data.results as Movie[];
}
