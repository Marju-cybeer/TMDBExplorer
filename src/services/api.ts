import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  const apiKey = process.env.EXPO_PUBLIC_TMDB_API_KEY;

  if (!apiKey) {
    throw new Error("TMDB API key não encontrada");
  }

  config.params = {
    ...config.params,
    api_key: apiKey,
    language: "pt-BR",
  };

  return config;
});

export { api };
