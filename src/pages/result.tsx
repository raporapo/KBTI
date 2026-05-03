import { Link } from "react-router-dom";
import { characters, descriptions } from "../data/characters";

const Result = ({ result }) => {
  const KBTI = result ? result.join("") : null; //KBTIのアルファベット表記 | null
  const KBTIname = characters.find((c) => c.name_1 === KBTI)?.name_2; //KBTIの日本語名 | undefined
  return (
    <div className="text-center">
      <div className="flex flex-col justify-center gap-10 my-10">
        <h3 className="text-2xl  mb-4">あなたのKBTIは...</h3>
        <div className="text-4xl font-bold">
          <h2 className="">{result === null ? "結果がありません" : KBTI}</h2>
          <h2 className="text-3xl">{KBTIname}</h2>
        </div>
      </div>

      {result !== null && (
        <section className="my-10 max-w-2xl mx-auto">
          {result[0] === "I" ? (
            <p className="my-4">{descriptions.Integral}</p>
          ) : (
            <p className="my-4">{descriptions.Split}</p>
          )}

          {result[1] === "N" ? (
            <p className="my-4">{descriptions.Natural}</p>
          ) : (
            <p className="my-4">{descriptions.Express}</p>
          )}

          {result[2] === "L" ? (
            <p className="my-4">{descriptions.Loud}</p>
          ) : (
            <p className="my-4">{descriptions.Ambient}</p>
          )}

          {result[3] === "T" ? (
            <p className="my-4">{descriptions.Tethered}</p>
          ) : (
            <p className="my-4">{descriptions.Free}</p>
          )}
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
