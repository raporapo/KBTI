import { Link } from "react-router-dom";
import {
  characters,
  descriptions,
  descriptionLabels,
} from "../data/characters";
import Budoux from "../components/Budoux";

type ResultType = ["I" | "S", "N" | "E", "L" | "A", "T" | "F"];

type Props = {
  result: ResultType | null;
};

const Result = ({ result }: Props) => {
  const KBTI = result ? result.join("") : null; //KBTIのアルファベット表記 | null
  const KBTIname = characters.find((c) => c.name_1 === KBTI)?.name_2; //KBTIの日本語名 | undefined
  return (
    <div className="text-center min-h-full px-4 sm:px-6">
      <div className="flex flex-col justify-center gap-6 sm:gap-10 my-6 sm:my-10">
        <h3 className="text-xl sm:text-2xl mb-2 sm:mb-4">あなたのKBTIは...</h3>
        <div className="text-3xl sm:text-4xl font-bold">
          <h2 className="">{result === null ? "結果がありません" : KBTI}</h2>
          <h2 className="text-2xl sm:text-3xl">{KBTIname}</h2>
        </div>
      </div>

      {result !== null && (
        <section className="my-6 sm:my-10 max-w-2xl mx-auto text-left">
          {(
            [
              [result[0] === "I" ? "Integral" : "Split"],
              [result[1] === "N" ? "Natural" : "Express"],
              [result[2] === "L" ? "Loud" : "Ambient"],
              [result[3] === "T" ? "Tethered" : "Free"],
            ] as const
          ).map(([key]) => (
            <div key={key} className="my-6 sm:my-8">
              <h4 className="font-bold text-lg sm:text-xl mb-2">
                {descriptionLabels[key]}
              </h4>
              <p>
                <Budoux text={descriptions[key]} />
              </p>
            </div>
          ))}
        </section>
      )}
      <div className="py-6">
        <Link to="/" className="btn btn-primary">
          ホームに戻る
        </Link>
      </div>
    </div>
  );
};

export default Result;
