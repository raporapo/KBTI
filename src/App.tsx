import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Diagnosis from "./pages/Diagnosis";
import Result from "./pages/result";
import HeaderNav from "./components/HeaderNav";
import { useState } from "react";

function App() {
  const [result, setResult] = useState<number[]>([]);

  const culculateResult = (answer: number[]) => {
    const newAnswer = [...answer];
    console.log(newAnswer);
    setResult(newAnswer);
  };

  return (
    <>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Diagnosis"
          element={<Diagnosis calculateResult={culculateResult} />}
        />
        <Route path="/Result" element={<Result result={result} />} />
      </Routes>
    </>
  );
}

export default App;
