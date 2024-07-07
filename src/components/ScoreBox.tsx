type ScoreBoxProps = {
  score: number;
};

const ScoreBox = ({ score }: ScoreBoxProps) => {
  return (
    <div className="rounded w-[50px] bg-zinc-800 border border-zinc-600 p-2">
      <h4 className="text-xl font-bold text-center text-white">{score}</h4>
    </div>
  );
};

export default ScoreBox;
