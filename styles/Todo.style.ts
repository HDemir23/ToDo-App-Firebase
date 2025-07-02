import { useThemeColors } from "@/constants/ThemeContext";
import { useMemo } from "react";
import { TextStyle, ViewStyle } from "react-native";

export const TodoStyles = () => {
  const theme = useThemeColors();

  const container: ViewStyle = useMemo(
    () => ({
      flex: 1,
      backgroundColor: theme.background,
      paddingHorizontal: 16,
      paddingTop: 50,
    }),
    [theme]
  );

  const input: TextStyle = useMemo(
    () => ({
      width: "100%",
      height: 50,
      borderColor: theme.border,
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 15,
      fontSize: 16,
      marginBottom: 15,
      backgroundColor: theme.inputBackground,
    }),
    [theme]
  );
  const FlatList: ViewStyle = useMemo(
    () => ({
      width: "100%",
      marginTop: 20,
    }),
    [theme]
  );
  const FlatListItem: ViewStyle = useMemo(
    () => ({
      padding: 12,
      marginBottom: 10,
      backgroundColor: theme.inputBackground,
      borderRadius: 8,
    }),
    [theme]
  );

  const asd: TextStyle = useMemo(() => ({}), [theme]);

  return {
    container,
    input,
    FlatList,
    FlatListItem,
  };
};
