import { useState } from "react";
import "./App.css";
import { jsPDF } from "jspdf";

function App() {
  const [count, setCount] = useState(0);
  const handleSavePdf = () => {
    const doc = new jsPDF();
    doc.text("Hello world!", 10, 10);
    doc.save("a4.pdf");
  };
  return (
    <div className="App">
      <div>TEST</div>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <button onClick={handleSavePdf}>PDF TEST</button>
    </div>
  );
}

export default App;
