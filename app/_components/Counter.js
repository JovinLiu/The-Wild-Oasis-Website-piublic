"use client";

import {useState} from "react";

function Counter({users}) {
  const [count, setCount] = useState(0);

  console.log(users);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>{count}</button>;
}

export default Counter;
