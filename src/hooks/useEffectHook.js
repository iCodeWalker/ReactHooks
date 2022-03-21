import React, { useEffect, useState } from "react";

//---- useEffect handles the side effects whwnever something happens.

const UseEffectHook = () => {
  const [resources, setResources] = useState("posts");

  const [items, setItems] = useState([]);

  //------ this callback function inside useEffect runs on every render of our component.
  useEffect(() => {
    console.log("render");
  });

  //------ this callback function inside useEffect runs only once when component gets mounted.
  useEffect(() => {
    console.log("render only once, when mounts.");
  }, []);

  //------ this callback function inside useEffect runs whenever the state in the dependency array changes.
  useEffect(() => {
    console.log("render when dependency changes");
  }, [resources]);

  //----- on unmounting of component. for cleaanup of event listeners.

  useEffect(() => {
    return console.log("unmounted from");
  });

  //------------------------------------------------------------------------

  useEffect(() => {
    fetch(`https://jsonplaceholder/typicode.com/${resources}`)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, [resources]);

  return (
    <div>
      <button
        onClick={() => {
          setResources("posts");
        }}
      >
        Posts
      </button>
      <button
        onClick={() => {
          setResources("comments");
        }}
      >
        Comments
      </button>
      <button
        onClick={() => {
          setResources("users");
        }}
      ></button>
      <div>
        <h1>{resources}</h1>
        {items.map((item) => {
          return <pre>{JSON.stringify(item)}</pre>;
        })}
      </div>
    </div>
  );
};

export default UseEffectHook;
