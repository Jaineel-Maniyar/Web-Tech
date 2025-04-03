import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");

  const handleStepChange = (e) => {
    let value = parseInt(e.target.value);
    if (isNaN(value) || value < 1) {
      setError("Step size must be a positive number.");
      setStep("");
    } else {
      setError("");
      setStep(value);
    }
  };

  return (
    <div className="counter-container">
      <h1>Count</h1>
      <p>{count}</p>

      <div className="step-container">
        <label htmlFor="step">Step Size:</label>
        <input type="number" id="step" value={step} min="1" onChange={handleStepChange} />
        {error && <p className="error">{error}</p>}
      </div>

      <div className="buttons">
        <button onClick={() => setCount(count - step)}>Decrement</button>
        <button onClick={() => setCount(count + step)}>Increment</button>
        <br />
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default App;
