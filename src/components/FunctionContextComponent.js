import React, { useContext } from "react";
import { ThemeContext } from "../hooks/useContextHook";
//--------------------------------------------------------
import { useTheme, useThemeUpdate } from "./ThemeContext";

export default function FunctionContextComponent() {
  const darkTheme = useContext(ThemeContext);

  const darkTheme2 = useTheme();
  const toggleTheme = useThemeUpdate();

  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  //   const themeStyles = {
  //     backgroundColor: darkTheme2 ? "#333" : "#CCC",
  //     color: darkTheme2 ? "#CCC" : "#333",
  //     padding: "2rem",
  //     margin: "2rem",
  //   };
  return (
    <>
      <button onClick={toggleTheme}> Toggle </button>
      <div style={themeStyles}>function Theme</div>;
    </>
  );
}
