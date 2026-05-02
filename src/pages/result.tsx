import { Link } from "react-router-dom";

const Result = ({ result }) => {
  console.log(result);
  const str = result.join("");
  return (
    <div className="text-center">
      <p>{str}</p>
      <Link to="/" className="btn btn-primary">
        Home
      </Link>
    </div>
  );
};

export default Result;
