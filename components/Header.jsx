import React from "react";
import style from "./Header.module.css";

function Header() {
  return (
    <header className={style.header}>
      <h1 className={style.title}>Where in the world?</h1>
      <p>Dark Mode</p>
    </header>
  );
}

export default Header;
