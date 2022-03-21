import { useState, useRef, useEffect } from "react";

//---- Ref does not cause our component to re-render or re-update when it changes. Ref persists between renders.
//---- useRef() returns a single value. It's an object { current: 0}
//---- and when we update this current property it gets persisted between the different renders.

// --- also uses ref for referencing html elements inside the component.
// --- each element inside our dom has a ref attribute.

// ---- we should never use Refs to manipulate states.

// --- we also uses ref to store previous values of state.

const UseRefHook = () => {
  const [name, setName] = useState("");
  //   const [renderCount, setRenderCount] = useState(0);

  const renderCount = useRef(1);
  const inputRef = useRef();

  const prevName = useRef("");

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  //   useEffect(() => {
  //     setRenderCount((prevCount) => prevCount + 1);
  //   });
  //   ------ This code puts the component in infinite re-renders.

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    // ---- we can change this renderCount as many times we want but it will never cause a re-render.
  });

  // ---- Focus our input element on click of button.

  const focus = () => {
    inputRef.current.focus();
    inputRef.current.value = "someone is here."; //we manually set the value of input. But still it does not gets re-rendered
  };

  return (
    <>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <div>
        My name is {name} and previous name is {prevName.current}
      </div>
      <div>render count is {renderCount.current}</div>
      <button onClick={focus}>Focus</button>
    </>
  );
};

export default UseRefHook;
