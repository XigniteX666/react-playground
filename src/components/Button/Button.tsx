import { useState } from "react";

export interface ButtonProps {
  title: string;
}

export const Button = ({ title }: ButtonProps) => {
  const [value, setValue] = useState<number>(0);
  return (
    <>
      <h1>{title}</h1>
      <span>{value}</span>
      <button onClick={() => setValue(value + 1)}>+</button>
      <button onClick={() => setValue(value - 1)}>-</button>
      <hr />
    </>
  );
};
