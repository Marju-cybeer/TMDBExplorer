import { api } from "./api";

export async function getMovieDetails(movieId: number) {
  const { data } = await api.get(`/movie/${movieId}`);
  return data;
}

export async function getMovieReviews(movieId: number) {
  const { data } = await api.get(`/movie/${movieId}/reviews`);
  return data.results;
}

export async function getMovieCast(movieId: number) {
  const { data } = await api.get(`/movie/${movieId}/credits`);
  return data.cast;
}
