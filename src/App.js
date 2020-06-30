import * as React from "react";

import { Counter } from "./components/Counter";
import { CounterTitle } from "./components/CounterTitle";

export function App() {
  return (
    <>
      <p>contador: 0</p>
      <CounterTitle />
      <Counter />
    </>
  );
}
