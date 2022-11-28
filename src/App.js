import "./styles.css";
import React, { useState, useEffect } from "react";
export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //non vi posso accedere in questo editor
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
