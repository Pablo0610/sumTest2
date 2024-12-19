import { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  // Maneja la eliminación de la última entrada
  const handleClear = () => {
    setInput("");
  };

  return (
    <div className="calculatora">
      <div className="display">
        <input type="text" value={input} readOnly />
      </div>
      <div className="buttons">
    {/* Primera fila */}
    <div className="flex gap-2 mb-2">
      <button onClick={() => handleClick("1")} className="p-2 bg-gray-200 rounded">1</button>
      <button onClick={() => handleClick("2")} className="p-2 bg-gray-200 rounded">2</button>
      <button onClick={() => handleClick("3")} className="p-2 bg-gray-200 rounded">3</button>
      <button onClick={() => handleClick("+")} className="p-2 bg-blue-500 text-white rounded">+</button>
    </div>

    {/* Segunda fila */}
    <div className="flex gap-2 mb-2">
      <button onClick={() => handleClick("4")} className="p-2 bg-gray-200 rounded">4</button>
      <button onClick={() => handleClick("5")} className="p-2 bg-gray-200 rounded">5</button>
      <button onClick={() => handleClick("6")} className="p-2 bg-gray-200 rounded">6</button>
      <button onClick={() => handleClick("-")} className="p-2 bg-blue-500 text-white rounded">-</button>
    </div>

    {/* Tercera fila */}
    <div className="flex gap-2 mb-2">
      <button onClick={() => handleClick("7")} className="p-2 bg-gray-200 rounded">7</button>
      <button onClick={() => handleClick("8")} className="p-2 bg-gray-200 rounded">8</button>
      <button onClick={() => handleClick("9")} className="p-2 bg-gray-200 rounded">9</button>
      <button onClick={() => handleClick("*")} className="p-2 bg-blue-500 text-white rounded">*</button>
    </div>

    {/* Cuarta fila */}
    <div className="flex gap-2">
      <button onClick={() => handleClick("0")} className="p-2 bg-gray-200 rounded">0</button>
      <button onClick={() => handleClick(".")} className="p-2 bg-gray-200 rounded">.</button>
      <button onClick={handleEvaluate} className="p-2 bg-green-500 text-white rounded">=</button>
      <button onClick={() => handleClick("/")} className="p-2 bg-blue-500 text-white rounded">/</button>
    </div>

        <button onClick={handleClear}>C</button>
      </div>
    </div>
  );
}
export default Calculator;