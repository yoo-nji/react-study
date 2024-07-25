import C from "./C";
import { useState } from "react";

const A = () => {
  console.log("A 렌더링");
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>A Component : {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}> a 증가</button>
      <C />
    </>
  );
};
export default A;
