import { useNavigate } from "react-router-dom";
import { questions } from "../data/questions";
import Question from "../components/Question";
import { useState } from "react";
import Description from "../components/Description";

const Diagnosis = ({ calculateResult }) => {
  const navigate = useNavigate();
  const [questionAnswer, setQuestionAnswer] = useState<Number[]>(
    Array(questions.length).fill(-1),
  );

  const isAllAnswered = questionAnswer.every((a) => a !== -1);

  const handleSubmit = () => {
    calculateResult(questionAnswer);
    navigate("/Result");
  };

  return (
    <div className="text-center px-4">
      <Description />
      {questions.map((question) => {
        return (
          <Question
            key={question.id}
            id={question.id}
            sentence={question.question_sentence}
            setQuestionAnswer={setQuestionAnswer}
          />
        );
      })}
      {!isAllAnswered && (
        <span className="text-red-500 block mt-10">
          全ての質問に回答してください
        </span>
      )}
      <button
        className="btn btn-primary mt-6 mb-[300px] disabled:opacity-40 disabled:cursor-not-allowed"
        onClick={handleSubmit}
        disabled={!isAllAnswered}
      >
        結果を見る
      </button>
    </div>
  );
};

export default Diagnosis;
