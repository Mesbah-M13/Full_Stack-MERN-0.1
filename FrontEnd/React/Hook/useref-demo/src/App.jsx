import React, { useRef, useState } from "react";

export default function App() {
  // Create a reference to the input field
  const inputRef = useRef(null);
  const [result,setResult] = useState('')

  const handleFocus = () => {
    // Focus the input field
    inputRef.current.focus();
  };

  const handleClear = () => {
    // Clear input field value directly
    inputRef.current.value = "";
  };

  const handleShowValue = () => {
    // Access the input's current value
    setResult(inputRef.current.value);
    inputRef.current.value = ''
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>🧠 useRef with Input Example</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
        style={{
          padding: "10px",
          width: "200px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      <div style={{ marginTop: "20px" }}>
        <button onClick={handleFocus} style={{ marginRight: "10px" }}>
          Focus
        </button>
        <button onClick={handleShowValue} style={{ marginRight: "10px" }}>
          Show Value
        </button>
        {inputRef && <p>Input value is: {result} </p> }
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
}
