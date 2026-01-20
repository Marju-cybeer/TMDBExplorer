import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useAuth } from "../hooks/useAuth";
import { useThemeStyles } from "../theme/useThemeStyles";

export function LoginScreen() {
  const { login } = useAuth();
  const { colors, spacing, radius } = useThemeStyles();

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: spacing.xl,
        backgroundColor: colors.background,
      }}
    >
      <Text style={{ fontSize: 22, marginBottom: spacing.lg, color: colors.text }}>
        Login
      </Text>

      <TextInput
        placeholder="Usuário"
        placeholderTextColor={colors.textSecondary}
        value={user}
        onChangeText={setUser}
        style={{
          borderWidth: 1,
          borderColor: colors.border,
          borderRadius: radius.md,
          padding: spacing.md,
          marginBottom: spacing.md,
          color: colors.text,
        }}
      />

      <TextInput
        placeholder="Senha"
        placeholderTextColor={colors.textSecondary}
        secureTextEntry
        value={pass}
        onChangeText={setPass}
        style={{
          borderWidth: 1,
          borderColor: colors.border,
          borderRadius: radius.md,
          padding: spacing.md,
          marginBottom: spacing.lg,
          color: colors.text,
        }}
      />

      <TouchableOpacity
        onPress={() => login(user, pass)}
        style={{
          backgroundColor: colors.primary,
          padding: spacing.md,
          borderRadius: radius.md,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "600" }}>
          Entrar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
