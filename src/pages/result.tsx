import { Link } from "react-router-dom";
import { characters, descriptions } from "../data/characters";
import Budoux from "../components/Budoux";

const Result = ({ result }) => {
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
          {result[0] === "I" ? (
            <p className="my-3 sm:my-4">
              <Budoux text={descriptions.Integral} />
            </p>
          ) : (
            <p className="my-3 sm:my-4">
              <Budoux text={descriptions.Split} />
            </p>
          )}

          {result[1] === "N" ? (
            <p className="my-3 sm:my-4">
              <Budoux text={descriptions.Natural} />
            </p>
          ) : (
            <p className="my-3 sm:my-4">
              <Budoux text={descriptions.Express} />
            </p>
          )}

          {result[2] === "L" ? (
            <p className="my-3 sm:my-4">
              <Budoux text={descriptions.Loud} />
            </p>
          ) : (
            <p className="my-3 sm:my-4">
              <Budoux text={descriptions.Ambient} />
            </p>
          )}

          {result[3] === "T" ? (
            <p className="my-3 sm:my-4">
              <Budoux text={descriptions.Tethered} />
            </p>
          ) : (
            <p className="my-3 sm:my-4">
              <Budoux text={descriptions.Free} />
            </p>
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
