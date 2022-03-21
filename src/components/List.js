import React, { useState, useEffect } from "react";

export default function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems(1));
    console.log("updating items..");
  }, [getItems]);

  return items.map((item) => <div key={item}>{item}</div>);
}
