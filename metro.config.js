const { getDefaultConfig } = require("@expo/metro-config");

const config = getDefaultConfig(__dirname);

config.resolver.alias = {
  "@": "./", // Aynı alias
};

module.exports = config;
