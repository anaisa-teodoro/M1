import type { ReactNode } from "react";
import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./Themes";
import { ThemeContext } from "./ThemeContext"; // 🔹 Importando o contexto separado

export const ThemeProviderWrapper = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
export { ThemeContext };

