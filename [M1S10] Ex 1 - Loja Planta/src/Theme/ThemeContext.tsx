import { createContext } from "react";

interface ThemeContextType {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

