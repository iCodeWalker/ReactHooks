import React, { useState, useCallback } from "react";
import List from "../components/List";

export default function UseCallbackHook() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(
    (incrementer) => {
      return [
        number + incrementer,
        number + 1 + incrementer,
        number + 2 + incrementer,
      ];
    },
    [number]
  );

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  return (
    <div style={theme}>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle Theme
      </button>
      <List getItems={getItems} />
    </div>
  );
}

// -- useCallback returns us the whole function.
// -- with useCallback we are not creating a new function on every render.
// -- function is created only when dependency array element gets change.

// -- useCallback is used when creating a function is very slow.
// -- so with useCallback we create this slow function only when needed and not on every render of component.

// -- useCallback also solves the problem of referential equality like useMemo.
