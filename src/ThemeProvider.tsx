import React, { useState, createContext } from "react";
import { ThemeContextType, Theme } from "./ts-utils/types";

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
);

export const ThemeProvider= ({ children}: {children: React.ReactNode}) => {
  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const color = theme === "light" ? "black" : "white";
  const backgroundColorBrand = theme === "light" ? "#FFE8E2" : "#11001f";
  const backgroundColor = theme === "light" ? "white" : "black";
  const filterBrand = theme === "light" ? "invert(88%) sepia(3%) saturate(2310%) hue-rotate(317deg) brightness(107%) contrast(101%)" : "invert(2%) sepia(66%) saturate(2434%) hue-rotate(271deg) brightness(95%) contrast(103%)"
  const filter = theme === "light" ? "invert(0%) sepia(90%) saturate(7461%) hue-rotate(58deg) brightness(105%) contrast(95%)" : "invert(100%) sepia(9%) saturate(134%) hue-rotate(295deg) brightness(115%) contrast(100%)"

  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColorBrand;
  document.body.style.borderColor = color;

  const links = document.querySelectorAll('a')
  Array.from(links).map(element => element.style.color = color)

  const images = document.querySelectorAll('img')
  Array.from(images).map(element => element.style.borderColor = color)

  const containers = document.querySelectorAll('.container') 
  Array.from((containers) as unknown as HTMLCollectionOf<HTMLElement>).map(element => element.style.backgroundColor = backgroundColor)
  Array.from((containers) as unknown as HTMLCollectionOf<HTMLElement>).map(element => element.style.borderColor = color)

  const additionnalBorders = document.querySelectorAll('.border-theme') 
  Array.from((additionnalBorders) as unknown as HTMLCollectionOf<HTMLElement>).map(element => element.style.borderColor = color)

  const subContainers = document.querySelectorAll('.sub-containers') 
  Array.from((subContainers) as unknown as HTMLCollectionOf<HTMLElement>).map(element => element.style.backgroundColor = backgroundColor)

  const navButtons = document.querySelectorAll('.nav-buttons') 
  Array.from((navButtons) as unknown as HTMLCollectionOf<HTMLElement>).map(element => element.style.backgroundColor = color)

  const navButtonsImg = document.querySelectorAll('.nav-buttons-img') 
  Array.from((navButtonsImg) as unknown as HTMLCollectionOf<HTMLElement>).map(element => element.style.filter = filterBrand)

  const icons = document.querySelectorAll('.icon-theme') 
  Array.from((icons) as unknown as HTMLCollectionOf<HTMLElement>).map(element => element.style.filter = filter)


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
