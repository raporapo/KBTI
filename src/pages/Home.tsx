import { Link } from "react-router-dom";
// import List from "../components/List";
// import KeycapA_VolDn from "../atoms/keycapSVG";

const Home = () => {
  return (
    <div className="text-center bg-[#FFFCF3] min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 md:mb-10">
        キーボードタイプ診断
      </h1>
      <div className="flex justify-center w-full">
        <Link
          to="/Diagnosis"
          className="btn btn-primary text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-2 sm:py-3"
        >
          診断スタート
        </Link>
      </div>
    </div>
  );
};
export default Home;
