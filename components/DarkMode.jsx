"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import style from "./DarkMode.module.css";
import moon from "../public/moon_icon.png";
import sun from "../public/sun_icon.png";
import Image from "next/image";

const DarkMode = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const saved = localStorage.getItem("darkTheme");
    setDarkTheme(saved ? JSON.parse(saved) : false);
  }, []);
  useEffect(() => {
    localStorage.setItem("darkTheme", JSON.stringify(darkTheme));
  }, [darkTheme]);

  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    setTheme(darkTheme ? "dark" : "light");
  }, [darkTheme]);

  if (!mounted) {
    return null;
  }

  const toggleDarkMode = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <button onClick={toggleDarkMode} className={style.DarkModeBtn}>
      <Image src={darkTheme ? moon : sun} width={20} height={20} />
      {theme.charAt(0).toUpperCase() + theme.slice(1)} Mode
    </button>
  );
};

export default DarkMode;
