import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        You clicked {count} times. Click{" "}
        <button onClick={() => setCount(count + 1)}>here</button> to
        increase the count.
      </div>
    </>
  );
}

export default App;
