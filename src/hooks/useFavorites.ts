import { useEffect, useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  addFavorite,
  removeFavorite,
  getFavorites,
  isFavorite,
  FavoriteMovie,
} from "../database/favorites.repository";

export function useFavorites(movieId?: number) {
  const [favorites, setFavorites] = useState<FavoriteMovie[]>([]);
  const [favorite, setFavorite] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  const loadFavorites = useCallback(async () => {
    const data = await getFavorites();
    setFavorites(data);
  }, []);

  const checkFavorite = useCallback(async () => {
    if (!movieId) {
      setFavorite(false);
      return;
    }

    const result = await isFavorite(movieId);
    setFavorite(!!result);
  }, [movieId]);

  const toggleFavorite = useCallback(
    async (movie: FavoriteMovie) => {
      if (favorite) {
        await removeFavorite(movie.id);
      } else {
        await addFavorite(movie);
      }

      await checkFavorite();
      await loadFavorites();
    },
    [favorite, checkFavorite, loadFavorites]
  );

  useEffect(() => {
    async function init() {
      await loadFavorites();
      if (movieId) {
        await checkFavorite();
      }
      setLoading(false);
    }

    init();
  }, [movieId, loadFavorites, checkFavorite]);

  // 🔁 Recarrega favoritos sempre que a tela ganhar foco
  useFocusEffect(
    useCallback(() => {
      loadFavorites();
    }, [loadFavorites])
  );

  return {
    favorites,
    favorite,
    loading,
    toggleFavorite,
  };
}
