import useGame from "../hooks/useGame";

const PlayerCard = () => {
  const { userChoice } = useGame();

  return (
    <div
      className={`w-[150px] h-[150px] bg-cover rounded-xl ${
        userChoice === "YOU" && "bg-white"
      }`}
      style={{ backgroundImage: `url(src/assets/${userChoice}.png)` }}
    >
      {userChoice === "YOU" && (
        <h5 className="text-xl font-bold text-center">YOU</h5>
      )}
    </div>
  );
};

export default PlayerCard;
