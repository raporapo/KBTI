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
      <button
        className="btn btn-primary mt-6 mb-[300px]"
        onClick={handleSubmit}
      >
        結果を見る
      </button>
    </div>
  );
};

export default Diagnosis;
