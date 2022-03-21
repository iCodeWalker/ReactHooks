import { useState, useMemo, useEffect } from "react";

//------ Memo means memoization that is idea of caching a value so we don't have to recompute the value every single time.

//------ we can cache the input number and the output the function gave so we don't have to compute every time we get the same number.

//--- its going to give us the same output on same input.
//--- so if our number dosen't change, we don't have to run our function again.

//---- Only use useMemo when function is extremely slow as useMemo consumes memory, so we can use useMemo on every function.

//---------------------------------------------------------------------------------------------------------------------------

//--- useMemo is also used for referencial equality.

//-- when we try to compare two variables in  javascript it is going to compare their reference in case of objects and array.
const UseMemoHook = () => {
  const [num, setNum] = useState(1);
  const [darkTheme, setDarkTheme] = useState(false);

  function slowFunction() {
    console.log("calling slow function");
    for (let i = 0; i < 100000000000; i++) {}
    return num * 2;
  }
  const runDouble = slowFunction(num);

  //   const doubleNumber = useMemo(() => {
  //     return slowFunction(num);
  //   }, [num]);

  //   const themeStyles = {
  //     backgroundColor: darkTheme ? "black" : "white",
  //     color: darkTheme ? "white" : "black",
  //   };

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: darkTheme ? "black" : "white",
      color: darkTheme ? "white" : "black",
    };
  }, [darkTheme]);
  //now we get the same reference of the object. and only changes when dependency changes

  useEffect(() => {
    console.log("rendered when theme change");
  }, [themeStyles]);
  //--- everytime we run our function a new themeStyles object is created.
  //--- and this new object is diiferent from the previous obbject in terms of reference.

  //--- this useEffect basically creates new themeStyles object every time component renders.

  return (
    <>
      <input
        value={num}
        type='number'
        onChange={(e) => setNum(e.target.value)}
      />
      <button onClick={() => setDarkTheme((prevState) => !prevState)}>
        Change Theme
      </button>
      <div style={{ themeStyles }}>{runDouble}</div>
    </>
  );
};

export default UseMemoHook;

// when we doesn't want to run our slow function that is highly complex compute every time we render our component.
// And only computes when we actually need value from the function, since the input actually changed.

// 2nd use case is of referencial equality.
// when we want to make sure that the reference of an object or an array is same as the last time it rendered.
// only change reference when the content of object actually change.
