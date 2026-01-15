import { db } from "./index";

export interface FavoriteMovie {
  id: number;
  title: string;
  poster: string;
  rating: number;
  releaseDate: string;
  createdAt?: string;
}

export async function addFavorite(movie: FavoriteMovie): Promise<void> {
  await db.runAsync(
    `
    INSERT OR REPLACE INTO favorites
    (id, title, poster, rating, releaseDate, createdAt)
    VALUES (?, ?, ?, ?, ?, ?)
    `,
    [
      movie.id,
      movie.title,
      movie.poster,
      movie.rating,
      movie.releaseDate,
      new Date().toISOString(),
    ]
  );
}

export async function removeFavorite(id: number): Promise<void> {
  await db.runAsync(
    `DELETE FROM favorites WHERE id = ?`,
    [id]
  );
}

export async function getFavorites(): Promise<FavoriteMovie[]> {
  const result = await db.getAllAsync<FavoriteMovie>(
    `SELECT * FROM favorites ORDER BY createdAt DESC`
  );

  return result;
}

export async function isFavorite(id: number): Promise<boolean> {
  const result = await db.getFirstAsync<{ id: number }>(
    `SELECT id FROM favorites WHERE id = ?`,
    [id]
  );

  return !!result;
}
