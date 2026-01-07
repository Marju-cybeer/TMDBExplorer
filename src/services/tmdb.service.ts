import { api } from "./api";
import { Movie } from "../types/movie";

export async function getHomeMovies() {
  const [nowPlaying, upcoming, topRated, popular] = await Promise.all([
    api.get("/movie/now_playing"),
    api.get("/movie/upcoming"),
    api.get("/movie/top_rated"),
    api.get("/movie/popular"),
  ]);

  return {
    nowPlaying: nowPlaying.data.results as Movie[],
    upcoming: upcoming.data.results as Movie[],
    topRated: topRated.data.results as Movie[],
    popular: popular.data.results as Movie[],
  };
}
