"use client";

import { ThemeProvider } from "next-themes";
import style from "./Header.module.css";
import DarkMode from "../components/DarkMode";

function Header() {
  return (
    <ThemeProvider>
      <header className={style.header}>
        <h1 className={style.title}>Where in the world?</h1>
        <DarkMode />
      </header>
    </ThemeProvider>
  );
}

export default Header;
