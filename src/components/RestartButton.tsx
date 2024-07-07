import useGame from "../hooks/useGame";
import RestartLogo from "../assets/restart.png";

const RestartButton = () => {
  const { handleRestart } = useGame();

  return (
    <button className="w-[30px] h-[30px] rounded-full" onClick={handleRestart}>
      <img src={RestartLogo} alt="Rstrt" />
    </button>
  );
};

export default RestartButton;
