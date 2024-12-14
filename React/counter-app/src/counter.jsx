import React, { useState } from "react";

function CounterApp() {
  // State to hold the counter value
  const [count, setCount] = useState(0);

  // Handlers for the buttons
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={styles.container}>
      <h1>React Counter App</h1>
      <div style={styles.counterDisplay}>
        <h2>Count: {count}</h2>
      </div>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={increment}>
          Increment
        </button>
        <button style={styles.button} onClick={decrement}>
          Decrement
        </button>
        <button style={styles.button} onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

// Inline CSS styles
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  },
  counterDisplay: {
    margin: "20px 0",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    outline: "none",
  },
};

export default CounterApp;
