//--- Difference beetween useEffect and useLayoutEffect is :-
// -- useLayoutEffect is synchronous in nature

//-- useLayoutEffect runs synchronously between when react calculates the dom and when it actually paints it out to the screen.

// -- used when we need to do something based on the layout.

// -- not much efficient.

import React, { useState, useRef, useEffect } from "react";

export default function UseLayoutEffectHook() {
  const [show, setShow] = useState(false);

  const popup = useRef();
  const button = useRef();

  useEffect(() => {
    if (popup.current == null || button.current) return;
    const { bottom } = button.current.getBoundingClientRect();
    popup.current.style.top = `${bottom + 25}`;
  }, [show]);

  return (
    <>
      <button ref={button} onClick={() => setShow((prev) => !prev)}>
        Click here
      </button>

      {show && (
        <div style={{ position: "absolute" }} ref={popup}>
          This is a popup
        </div>
      )}
    </>
  );
}
