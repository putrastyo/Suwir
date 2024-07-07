import useGame from "../../hooks/useGame";
import Card from "../Card";
import RockImage from "../../assets/rock.png";
import PaperImage from "../../assets/paper.png";
import ScissorImage from "../../assets/scissor.png";

const CardWrapper = () => {
  const { handlePlay } = useGame();

  return (
    <div className="absolute bottom-0 left-0 w-full px-6 py-6 bg-white rounded-t-3xl">
      <div className="flex justify-around">
        <Card onClick={() => handlePlay("rock")} image={RockImage} />
        <Card onClick={() => handlePlay("paper")} image={PaperImage} />
        <Card onClick={() => handlePlay("scissor")} image={ScissorImage} />
      </div>
    </div>
  );
};

export default CardWrapper;
