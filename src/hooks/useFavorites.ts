import { useEffect, useState } from "react";
import {
  addFavorite,
  removeFavorite,
  getFavorites,
  isFavorite,
  FavoriteMovie,
} from "../database/favorites.repository";

export function useFavorites(movieId?: number) {
  const [favorites, setFavorites] = useState<FavoriteMovie[]>([]);
  const [favorite, setFavorite] = useState(false);

  async function loadFavorites() {
    const data = await getFavorites();
    setFavorites(data);
  }

  async function checkFavorite() {
    if (!movieId) return;
    const result = await isFavorite(movieId);
    setFavorite(result);
  }

  async function toggleFavorite(movie: FavoriteMovie) {
    if (favorite) {
      await removeFavorite(movie.id);
    } else {
      await addFavorite(movie);
    }
    await checkFavorite();
    await loadFavorites();
  }

  useEffect(() => {
    loadFavorites();
    checkFavorite();
  }, [movieId]);

  return {
    favorites,
    favorite,
    toggleFavorite,
  };
}
