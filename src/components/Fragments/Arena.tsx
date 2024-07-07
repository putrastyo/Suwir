import CpuCard from "../CpuCard";
import PlayerCard from "../PlayerCard";
import VersusLogo from "../../assets/vs.png";

const Arena = () => {
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <CpuCard />
      <img src={VersusLogo} alt="VS" className="w-16 mx-auto my-8" />
      <PlayerCard />
    </div>
  );
};

export default Arena;
