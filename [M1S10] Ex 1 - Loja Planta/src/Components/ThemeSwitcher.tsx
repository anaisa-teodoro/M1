import { useContext } from "react";
import { ThemeContext } from "../Theme/ThemeContext";
import { Paper, Button } from "@mui/material";

import styles from "../Styles/store-layout.module.css";
export const ThemeSwitcher = () => {
  const themeCtx = useContext(ThemeContext);

  if (!themeCtx) {
    return <p>Erro!</p>;
  }

  return (
    <Paper elevation={4} className={styles.themeContainer}>
      <Button className={styles.themeButton} onClick={themeCtx.toggleTheme}>
        {themeCtx.isDarkMode ? "Modo Claro ☀️" : "Modo Escuro 🌙"}
      </Button>

    </Paper>
  );
};
