import React, { createContext, useContext, useEffect, useState } from "react";
import { Appearance } from "react-native";
import * as SecureStore from "expo-secure-store";

type ThemeType = "light" | "dark";

const ThemeContext = createContext<{
  theme: ThemeType;
  toggleTheme: () => void;
}>({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  useEffect(() => {
    const loadTheme = async () => {
      const saved = await SecureStore.getItemAsync("theme");
      if (saved === "light" || saved === "dark") {
        setTheme(saved);
      } else {
        const sysTheme = Appearance.getColorScheme() || "light";
        setTheme(sysTheme);
      }
    };
    loadTheme();
  }, []);

  const toggleTheme = async () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    await SecureStore.setItemAsync("theme", newTheme);
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
