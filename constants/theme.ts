export const lightTheme = {
  mode: "light",
  background: "#FDF6EC", // Soft cream background
  card: "#FFFFFF", // Plain white card surface
  foreground: "#3A3A2C", // Main text, deep neutral
  secondaryText: "#857C63", // Muted secondary text
  placeholderText: "#A6A28F", // Subtle input placeholder
  border: "#E6DCC3", // Light beige border
  inputBackground: "#FBF8F1", // Slightly tinted input field
  primary: "#B8860B", // Golden primary (e.g. buttons)
  primaryTextOnPrimary: "#FFFFFF", // Text on primary (contrast)
  accent: "#D8CBB5", // Warm accent tone
  textLink: "#007AFF",

  button: {
    background: "#B8860B",
    text: "#FFFFFF",
    border: "#8B6914",
    hover: "#7F5F1A",
  },

  shadow: {
    color: "#000000",
    opacity: 0.06,
    radius: 4,
    offset: { width: 0, height: 2 },
  },

  status: {
    success: "#228B22", // Forest green
    warning: "#DAA520", // Goldenrod
    error: "#8B0000", // Dark red
  },
};

export const darkTheme = {
  mode: "dark",
  background: "#1E1E1A", // Dark olive/charcoal mix
  card: "#2A2A24", // Slightly brighter card
  foreground: "#EAE3D2", // Light text
  secondaryText: "#B8B097", // Muted warm-gray
  placeholderText: "#A89F85", // Subtle warm-gray
  border: "#3D3D30", // Dark border
  inputBackground: "#2F2F26", // Slight contrast for input
  primary: "#D4AF37", // Rich gold
  primaryTextOnPrimary: "#000000", // Black text on gold
  accent: "#C0AB7F", // Warm metallic tone
  textLink: "#58a6ff",

  button: {
    background: "#D4AF37",
    text: "#000000",
    border: "#A67C00",
    hover: "#B8860B",
  },

  shadow: {
    color: "#000000",
    opacity: 0.2,
    radius: 4,
    offset: { width: 0, height: 2 },
  },

  status: {
    success: "#32CD32", // LimeGreen
    warning: "#FFD700", // Gold
    error: "#FF6347", // Tomato
  },
};
