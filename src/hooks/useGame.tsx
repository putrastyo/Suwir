import { useContext } from "react";
import { GameContext, GameContextType } from "../context/GameContext";

const useGame = (): GameContextType => {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error("useGame must be used within an GameContextProvider");
  }

  return context;
};

export default useGame;
