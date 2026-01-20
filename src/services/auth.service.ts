import * as SecureStore from "expo-secure-store";

const TOKEN_KEY = "auth_token";

export async function signIn(username: string, password: string) {
  // 🔐 MOCK
  if (username && password) {
    await SecureStore.setItemAsync(TOKEN_KEY, "mock-token-123");
    return true;
  }
  return false;
}

export async function signOut() {
  await SecureStore.deleteItemAsync(TOKEN_KEY);
}

export async function getToken() {
  return SecureStore.getItemAsync(TOKEN_KEY);
}
