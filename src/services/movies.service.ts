// src/services/movies.service.ts
import { api } from "./api";

export async function getNowPlaying() {
  const { data } = await api.get("/movie/now_playing");
  return data.results;
}

export async function getPopular() {
  const { data } = await api.get("/movie/popular");
  return data.results;
}

export async function getUpcoming() {
  const { data } = await api.get("/movie/upcoming");
  return data.results;
}

export async function getTopRated() {
  const { data } = await api.get("/movie/top_rated");
  return data.results;
}

export async function searchMovies(query: string) {
  const { data } = await api.get("/search/movie", {
    params: { query },
  });
  return data.results;
}
