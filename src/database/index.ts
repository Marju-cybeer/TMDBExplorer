import * as SQLite from "expo-sqlite";

export const db = SQLite.openDatabaseSync("tmdb.db");

export async function initDatabase(): Promise<void> {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS favorites (
      id INTEGER PRIMARY KEY NOT NULL,
      title TEXT NOT NULL,
      poster TEXT,
      rating REAL,
      releaseDate TEXT,
      createdAt TEXT
    );
  `);
}
