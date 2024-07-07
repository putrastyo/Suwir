import RestartButton from "../RestartButton";
import ScoreBoard from "./ScoreBoard";

const Navbar = () => {
  return (
    <nav className="relative flex items-center justify-between p-4 mb-10 bg-zinc-900">
      <h5 className="text-xl font-bold text-yellow-500">SUWIR</h5>
      <RestartButton />
      <ScoreBoard />
    </nav>
  );
};

export default Navbar;
