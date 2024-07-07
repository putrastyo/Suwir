import useGame from "../hooks/useGame";

const CpuCard = () => {
  const { computerChoice } = useGame();

  return (
    <div
      className={`w-[150px] h-[150px] bg-cover rounded-xl ${
        computerChoice === "CPU" && "bg-white"
      }`}
      style={{ backgroundImage: `url(src/assets/${computerChoice}.png)` }}
    >
      {computerChoice === "CPU" && (
        <h5 className="text-xl font-bold text-center">CPU</h5>
      )}
    </div>
  );
};

export default CpuCard;
