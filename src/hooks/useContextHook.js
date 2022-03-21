// ---- Context is for passing down props essentially all the way down into any of the children
// ---- without actually having to manually pass it to the components.

// ---- It's like a global state for all the children of the Provider

import React, { useState } from "react";
import ClassContextComponent from "../components/ClassContextComponent";
import FunctionContextComponent from "../components/FunctionContextComponent";

//-----------------------------------------------------------
import ThemeProvider from "../components/ThemeContext";

export const ThemeContext = React.createContext();

const UseContextHook = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <ClassContextComponent></ClassContextComponent>
        <FunctionContextComponent></FunctionContextComponent>
      </ThemeContext.Provider>
      {/* -------------------------------------------------------- */}
      <ThemeProvider>
        <FunctionContextComponent></FunctionContextComponent>
      </ThemeProvider>
    </>
  );
};
export default UseContextHook;
