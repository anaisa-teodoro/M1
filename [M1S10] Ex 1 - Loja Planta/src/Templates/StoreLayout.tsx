import { ThemeSwitcher } from "../Components/ThemeSwitcher";
import type { ReactNode } from "react";
import styles from "../Styles/store-layout.module.css";

interface StoreLayoutProps {
  children: ReactNode;
}

export const StoreLayout = ({ children }: StoreLayoutProps) => (
  <div className={styles.container}>
    <header className={styles.header}>
  <img src="./treelogo.jpg" alt="Planta Logo" className={styles.logo} />
      
      <p className={styles.slogan}>Loja de plantas JOI</p> 
      <ThemeSwitcher />
    </header>

    <main className={styles.content}>{children}</main>

    <footer className={styles.footer}>
      <p>Feito nas aulas do FuturoDEV Joinville v3</p>
    </footer>
  </div>
);
