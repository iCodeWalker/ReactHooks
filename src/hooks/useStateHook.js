import React, { useState } from "react";

//----- hooks can only be used inside functional components
//----- React hooks must be called in exact order on every render
//----- Cannot put hooks inside if statements, functions, loops, or anything else.
//----- Hooks should be in top level. Always called in same order.

//--------------------------------------------------------------------

//----- argumnet(arg) we pass to useState(arg) is the initial value of state.
//----- useState returns an array of values. We usually destructure the whole array and use it like that.
//----- first value of array is state.
//----- second value is a function that allows us to update a state.

//----- every time we call setCount function or handler our component gets updated with new value of count.

//-------------------------------

// initial value of state is called on every render of the function.
// ---- intial value of function can be given in two ways.
//-----   direct hardcoded value.
//-----   or a function that runs only the very first time our component renders.

// function intialValueFunction() {
//   console.log("running...");
//   return 4;
// }

const UseStateHook = () => {
  //-------------- If we have a slow complex computation intial state we use this method for initial state.
  // const [count, setCount] = useState(() => {
  //     console.log("running first time");
  //     return 4;
  // })            ------------------------------------This runs only on first render.

  // const [count, setCount] = useState(initialValueFunction())  ------ This runs on every render.

  const [count, setCount] = useState(4);

  //--- When using object as state we have to be cautious as automatic merging does not happen in functional components.
  //--- on decrement function the color state gets deleted. and only the counter state remains.

  //--- to merge the other states with the changed one we have to do it like this.

  //----  return {...prevCount, state: prevCount.counter + 1}

  //automatic merging does not happen because in functional compoents we can use differnet state for different pieces of data.

  const [state, setState] = useState({ counter: 0, color: "red" });

  //   const counter = state.counter;
  //   const color = state.color;

  //   const decrement = () => {
  //       setState((prevCount) => {
  //         return {counter: prevCount.counter - 1}
  //       })
  //   }

  const decrementHandler = () => {
    // setCount(count - 1);
    // setCount(count - 1);
    // This code seems to decrease count by 2 on every click but this does not happens.
    // Because every time setState is called it has the same value of count and they are
    // overidding each other. if we try to update state like this it only decrements by 1.

    setCount((prevCount) => prevCount - 1);
    // in this way we get the previous value of the state inside the callback function.
  };

  const incrementHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <button onClick={decrementHandler}>
        <b>-</b>
      </button>
      <span>{count}</span>
      <span>{state.counter}</span>
      <button onClick={incrementHandler}>
        <b>+</b>
      </button>
    </div>
  );
};

export default UseStateHook;
