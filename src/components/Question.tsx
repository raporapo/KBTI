import React from "react";
import KeyboardBtn from "../atoms/keyboardBtn";

type Props = {
  id: number;
  sentence: string;
  setQuestionAnswer: React.Dispatch<React.SetStateAction<Number[]>>;
};

const Question = ({ id, sentence, setQuestionAnswer }: Props) => {
  const handleClick = (id: number, index: number) => {
    setQuestionAnswer((prev: Number[]) => {
      const next = [...prev];
      next[id] = index;
      return next;
    });
  };

  return (
    <div className="border-b-1 border-gray-300 py-10 max-w-xl mx-auto">
      <h3 className="font-bold text-xl">{sentence}</h3>
      <KeyboardBtn handleClick={handleClick} id={id} />
    </div>
  );
};

export default Question;
