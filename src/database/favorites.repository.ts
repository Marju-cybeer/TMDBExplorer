import * as SQLite from "expo-sqlite";
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
    db.transaction((tx: SQLite.SQLTransaction) => {
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
        (_tx: SQLite.SQLTransaction) => resolve(),
        (_tx: SQLite.SQLTransaction, error: SQLite.SQLError) => {
          reject(error);
          return false;
        }
      );
    });
  });
}

export function removeFavorite(id: number) {
  return new Promise<void>((resolve, reject) => {
    db.transaction((tx: SQLite.SQLTransaction) => {
      tx.executeSql(
        `DELETE FROM favorites WHERE id = ?`,
        [id],
        (_tx: SQLite.SQLTransaction) => resolve(),
        (_tx: SQLite.SQLTransaction, error: SQLite.SQLError) => {
          reject(error);
          return false;
        }
      );
    });
  });
}

export function getFavorites() {
  return new Promise<FavoriteMovie[]>((resolve, reject) => {
    db.transaction((tx: SQLite.SQLTransaction) => {
      tx.executeSql(
        `SELECT * FROM favorites ORDER BY createdAt DESC`,
        [],
        (
          _tx: SQLite.SQLTransaction,
          result: SQLite.SQLResultSet
        ) => resolve(result.rows._array),
        (_tx: SQLite.SQLTransaction, error: SQLite.SQLError) => {
          reject(error);
          return false;
        }
      );
    });
  });
}

export function isFavorite(id: number) {
  return new Promise<boolean>((resolve) => {
    db.transaction((tx: SQLite.SQLTransaction) => {
      tx.executeSql(
        `SELECT id FROM favorites WHERE id = ?`,
        [id],
        (
          _tx: SQLite.SQLTransaction,
          result: SQLite.SQLResultSet
        ) => resolve(result.rows.length > 0)
      );
    });
  });
}
