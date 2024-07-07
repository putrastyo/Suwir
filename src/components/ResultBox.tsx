import useGame from "../hooks/useGame";

const ResultBox = () => {
  const { result } = useGame();
  return (
    <div className="px-4 py-2 mx-auto rounded bg-zinc-900 w-fit">
      <h3 className="text-2xl font-bold text-white">{result}</h3>
    </div>
  );
};

export default ResultBox;
