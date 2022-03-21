import React, { useState, useReducer } from "react";

//-- useReducer also allows us to manage state, and re-render a component whenever that state changes.

//-- useReducer gives us a more concrete way to handle complex states. It gives setactions to perform on our states and it converts our
//-- current state into new version of state based on the action we sent.

//-- useReducer have very similar pattern to redux.

//-----------------------------------------------------------

//-- useReducer takes two parameter.
//-- 1st :- a function
//-- 2nd :- initial state object.

//-- useRedcuer returns state and a dispatch function.
//-- dispatch function is called in order to update the state.

// whatever we call dispatch with, it is going to be set as action in reducer.
// and reducer is going to return new state.

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducer(state, action) {
  //-- There is no other way to modify the state other than through the actions predefined.
  //-- In this way our state changes only in the way expected and not in some weird unexpected way.
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}
const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  //const [count, setCount] = useState(0);

  //   function increment() {
  //     setCount((prevCount) => prevCount + 1);
  //   }

  //   function decrement() {
  //     setCount((prevCount) => prevCount - 1);
  //   }

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }

  return (
    <div>
      <button onClick={increment}>increment</button>
      {/* <div>{count}</div> */}
      <div>{state.count}</div>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default UseReducerHook;
