//리액트 렌더링 실습!

import { useState } from "react";
import A from "./A";
import B from "./B";

const ABC = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>카운트 : {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}> 증가</button>
      <A />
      <B />
    </>
  );
};
export default ABC;
