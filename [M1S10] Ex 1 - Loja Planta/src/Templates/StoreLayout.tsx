import { ThemeSwitcher } from "../Components/ThemeSwitcher";
import type { ReactNode } from "react";
import styles from "../Styles/store-layout.module.css";

interface StoreLayoutProps {
  children: ReactNode;
}

export const StoreLayout = ({ children }: StoreLayoutProps) => (
  <div className={styles.container}>
    <header className={styles.header}>
      <img src="./images/plantstore.png" alt="Plant Store Logo" className={styles.logo} />
      
      <p className={styles.slogan}>Cultivando vida com paixão 🌿</p> 
      <ThemeSwitcher />
    </header>

    <main className={styles.content}>{children}</main>

    <footer className={styles.footer}>
      <p>© 2025 Plant Store - Cultivando Vida 🌱</p>
    </footer>
  </div>
);
