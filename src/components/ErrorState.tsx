import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useThemeStyles } from "../theme/useThemeStyles";

interface Props {
  message?: string;
  onRetry?: () => void;
}

export function ErrorState({
  message = "Algo deu errado. Tente novamente.",
  onRetry,
}: Props) {
  const { colors, spacing, typography } = useThemeStyles();

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.message,
          {
            color: colors.text,
            fontSize: typography.medium,
          },
        ]}
      >
        {message}
      </Text>

      {onRetry && (
        <TouchableOpacity
          onPress={onRetry}
          style={[
            styles.button,
            { backgroundColor: colors.primary },
          ]}
        >
          <Text style={styles.buttonText}>Tentar novamente</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  message: {
    textAlign: "center",
    marginBottom: 16,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "600",
  },
});
