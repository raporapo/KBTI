import React from "react";
import KeyboardBtn from "../atoms/keyboardBtn";
import Budoux from "./Budoux";

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
    const scrollAmount = window.innerWidth < 640 ? 130 : 200;
    window.scrollBy({ top: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="border-b-1 border-gray-300 py-6 sm:py-10 max-w-xl mx-auto px-2 sm:px-4">
      <h3 className="font-bold text-base sm:text-lg md:text-xl">
        <Budoux text={sentence} />
      </h3>
      <KeyboardBtn handleClick={handleClick} id={id} />
    </div>
  );
};

export default Question;
