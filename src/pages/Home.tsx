import { Link } from "react-router-dom";
// import List from "../components/List";
// import KeycapA_VolDn from "../atoms/keycapSVG";

const Home = () => {
  return (
    <div className="text-center bg-[#FFFC#3]">
      <h1 className="text-2xl font-bold my-4">キーボードタイプ診断</h1>
      <div className="flex justify-center">
        <Link to="/Diagnosis" className="btn btn-primary">
          診断スタート
        </Link>
      </div>
    </div>
  );
};
export default Home;
