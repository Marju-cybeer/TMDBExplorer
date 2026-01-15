import AsyncStorage from "@react-native-async-storage/async-storage";

const THEME_KEY = "@tmdb:theme";

export async function saveTheme(theme: "light" | "dark") {
  await AsyncStorage.setItem(THEME_KEY, theme);
}

export async function loadTheme() {
  return (await AsyncStorage.getItem(THEME_KEY)) as "light" | "dark" | null;
}
