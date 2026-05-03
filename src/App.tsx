import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Diagnosis from "./pages/Diagnosis";
import Result from "./pages/result";
import HeaderNav from "./components/HeaderNav";
import { useState } from "react";
import { questions } from "./data/questions";

type resultType = ["I" | "S", "N" | "E", "L" | "A", "T" | "F"];

function App() {
  const [result, setResult] = useState<resultType | null>(null);

  const culculateResult = (answers: number[]) => {
    const sumOfPoint = Array(8).fill(0); //8タイプのポイント合計
    answers.forEach((answerNum, i) => {
      //質問i番目の答えanswerNum1~4
      const evaluation = [...questions[i].evaluation]; //質問i番目の評価点(0と4の時の点数配列)
      if (answerNum === 0) {
        //「そう思う」の時
        evaluation[0].forEach((point, index) => {
          //evaluation[0]を足す
          sumOfPoint[index] += point;
        });
      } else if (answerNum == 1) {
        //「少しそう思う」の時
        evaluation[0].forEach((point, index) => {
          //evaluation[0]の0.7倍を足す
          sumOfPoint[index] += point * 0.7;
        });
      } else if (answerNum == 2) {
        //「どちらでもない」の時
        const averageEvaluation = evaluation[0].map(
          (point, index) => (point + evaluation[1][index]) / 2,
        ); //evaluation[0]とevaluation[1]の平均
        averageEvaluation.forEach((point, index) => {
          sumOfPoint[index] += point / 2; //平均の半分をたす
        });
      } else if (answerNum == 3) {
        //「あまり思わない」の時
        evaluation[1].forEach((point, index) => {
          //evaluation[1]の0.7倍を足す
          sumOfPoint[index] += point * 0.7;
        });
      } else if (answerNum == 4) {
        //「そう思わない」の時
        evaluation[1].forEach((point, index) => {
          //evaluation[1]を足す
          sumOfPoint[index] += point;
        });
      } else {
        sumOfPoint.map(() => -2);
      }
    });

    const KBTI: resultType = [
      sumOfPoint[0] >= sumOfPoint[1] ? "I" : "S",
      sumOfPoint[2] >= sumOfPoint[3] ? "N" : "E",
      sumOfPoint[4] >= sumOfPoint[5] ? "L" : "A",
      sumOfPoint[6] >= sumOfPoint[7] ? "T" : "F",
    ];

    setResult(KBTI);
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
