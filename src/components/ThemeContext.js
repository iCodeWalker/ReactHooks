import React, { useState, useContext, Children } from "react";

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

const ThemeProvider = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }
  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {Children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
