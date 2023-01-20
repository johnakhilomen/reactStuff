import { useState } from "react";

export default function ParentFCWithMemoization() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  console.log("Parent render");
  return (
    <div>
      <button onClick={handleClick}>Increment</button>
      <h2>{count}</h2>
      <Child name={"joe"} />
    </div>
  );
}
