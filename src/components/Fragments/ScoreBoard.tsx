import useGame from "../../hooks/useGame";
import ScoreBox from "../ScoreBox";

const ScoreBoard = () => {
  const { userScore, computerScore } = useGame();

  return (
    <div className="absolute -translate-x-1/2 -bottom-1/2 left-1/2">
      <div className="flex gap-3">
        <div className="text-center">
          <small className="font-bold text-blue-200">YOU</small>
          <ScoreBox score={userScore} />
        </div>
        :
        <div className="text-center">
          <small className="font-bold text-blue-200">CPU</small>
          <ScoreBox score={computerScore} />
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
