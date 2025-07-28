import type { FC } from "react";
import { Link } from "react-router-dom";

const Home: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <Link to="inputs">Inputs</Link>
    </div>
  );
};
export default Home;
