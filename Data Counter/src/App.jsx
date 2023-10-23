import { useState } from "react";
import "./style.css";

function App() {
  return (
    <>
      <h1>Data Counter</h1>
      <Counter />
    </>
  );
}

function Counter() {
  const [step, setStep] = useState(1);

  return (
    <div>
      <div className="buttons">
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
    </div>
  );
}

export default App;
