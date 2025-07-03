import { useThemeColors } from "@/constants/ThemeContext";
import { useMemo } from "react";
import { TextStyle, ViewStyle } from "react-native";

export const editModalStyle = () => {
  const theme = useThemeColors();

  const overlay: ViewStyle = useMemo(
    () => ({
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.6)",
      justifyContent: "center",
      alignItems: "center",
    }),
    [theme]
  );
  const container: ViewStyle = useMemo(
    () => ({
      backgroundColor: "white",
      padding: 20,
      borderRadius: 12,
      width: "80%",
    }),
    [theme]
  );
  const input: TextStyle = useMemo(
    () => ({
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 8,
      padding: 12,
      marginBottom: 12,
    }),
    [theme]
  );
  const button: ViewStyle = useMemo(
    () => ({
      backgroundColor: "#007bff",
      padding: 12,
      borderRadius: 8,
    }),
    [theme]
  );
  const buttonText: TextStyle = useMemo(
    () => ({
      color: "white",
      textAlign: "center",
      fontWeight: "bold",
    }),
    [theme]
  );

  return {
    overlay,
    container,
    input,
    button,
    buttonText,
  };
};
