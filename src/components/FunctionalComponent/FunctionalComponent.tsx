import { useState } from "react";
export interface FunctionalProps {
  title: string;
  number?: number;
}

export const FunctionalComponent = ({ title }: FunctionalProps) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Functional component: {count}</h1>
      <button onClick={() => setCount(count + 1)}>{title}</button>
    </>
  );
};
