import { db } from "./index";

export interface FavoriteMovie {
  id: number;
  title: string;
  poster: string;
  rating: number;
  releaseDate: string;
}

export function addFavorite(movie: FavoriteMovie) {
  return new Promise<void>((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
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
        ],
        () => resolve(),
        (_, error) => {
          reject(error);
          return false;
        }
      );
    });
  });
}

export function removeFavorite(id: number) {
  return new Promise<void>((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `DELETE FROM favorites WHERE id = ?`,
        [id],
        () => resolve(),
        (_, error) => {
          reject(error);
          return false;
        }
      );
    });
  });
}

export function getFavorites() {
  return new Promise<FavoriteMovie[]>((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM favorites ORDER BY createdAt DESC`,
        [],
        (_, result) => resolve(result.rows._array),
        (_, error) => {
          reject(error);
          return false;
        }
      );
    });
  });
}

export function isFavorite(id: number) {
  return new Promise<boolean>((resolve) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT id FROM favorites WHERE id = ?`,
        [id],
        (_, result) => resolve(result.rows.length > 0)
      );
    });
  });
}
