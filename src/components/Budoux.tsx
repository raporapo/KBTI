import { Fragment } from "react";
import { loadDefaultJapaneseParser } from "budoux";

const parser = loadDefaultJapaneseParser();

type Props = {
  text: string;
  className?: string;
};

const Budoux = ({ text, className }: Props) => {
  const segments = parser.parse(text);
  return (
    <span className={`line ${className ?? ""}`}>
      {segments.map((seg, i) => (
        <Fragment key={i}>
          {seg}
          {i < segments.length - 1 && <wbr />}
        </Fragment>
      ))}
    </span>
  );
};

export default Budoux;
