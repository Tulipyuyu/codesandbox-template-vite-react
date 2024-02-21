import { useState } from "react";
import "./App.css";
import { jsPDF } from "jspdf";
import { Button } from "antd";
import Nav from "./components/nav";

function App() {
  const [count, setCount] = useState(0);
  const handleSavePdf = () => {
    const doc = new jsPDF();
    doc.text("Hello world!", 10, 10);
    doc.save("a4.pdf");
  };
  return (
    <div className="App">
      <div>
        <Nav />
      </div>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <Button type="primary" onClick={handleSavePdf}>
        PDF TEST
      </Button>
    </div>
  );
}

export default App;
