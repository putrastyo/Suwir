import Arena from "./components/Fragments/Arena";
import CardWrapper from "./components/Fragments/CardWrapper";
import Navbar from "./components/Fragments/Navbar";
import ResultBox from "./components/ResultBox";
import useGame from "./hooks/useGame";

const App = () => {
  const { result } = useGame();

  return (
    <div className="flex items-center justify-center h-screen bg-green-900">
      <div className="md:w-[400px] w-full h-full bg-main relative bg-cover bg-no-repeat">
        <Navbar />
        {result && <ResultBox />}
        <Arena />
        <CardWrapper />
      </div>
    </div>
  );
};

export default App;
