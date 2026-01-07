import * as SQLite from "expo-sqlite";

export const db = SQLite.openDatabase("tmdb.db");

export function initDatabase() {
  db.transaction((tx: SQLite.SQLTransaction) => {
    tx.executeSql(`
      CREATE TABLE IF NOT EXISTS favorites (
        id INTEGER PRIMARY KEY NOT NULL,
        title TEXT NOT NULL,
        poster TEXT,
        rating REAL,
        releaseDate TEXT,
        createdAt TEXT
      );
    `);
  });
}
