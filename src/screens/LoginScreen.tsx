import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useThemeStyles } from "../theme/useThemeStyles";
import { Loading } from "../components/Loading";

export default function LoginScreen() {
  const { signIn, loading } = useAuth();
  const { colors } = useThemeStyles();
  const [submitting, setSubmitting] = useState(false);

  async function handleLogin() {
    try {
      setSubmitting(true);
      await signIn();
    } catch (error) {
      Alert.alert("Erro ao entrar", "Não foi possível realizar o login.");
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>
        TMDB Explorer
      </Text>

      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: colors.primary, opacity: submitting ? 0.7 : 1 },
        ]}
        onPress={handleLogin}
        disabled={submitting}
      >
        <Text style={styles.buttonText}>
          {submitting ? "Entrando..." : "Entrar"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
    fontSize: 28,
    marginBottom: 32,
    fontWeight: "600",
  },
  button: {
    width: "100%",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
