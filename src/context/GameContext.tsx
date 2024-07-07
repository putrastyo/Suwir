import { createContext, useState } from "react";

export interface GameContextType {
  userChoice: string;
  computerChoice: string;
  result: string;
  userScore: number;
  computerScore: number;
  handleRestart: () => void;
  handlePlay: (choice: string) => void;
}

export const GameContext = createContext<GameContextType | undefined>(
  undefined
);

export const GameContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [userChoice, setUserChoice] = useState("YOU");
  const [computerChoice, setComputerChoice] = useState("CPU");
  const [result, setResult] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const choices = ["rock", "paper", "scissor"];

  const getComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
    return randomChoice;
  };

  const handlePlay = (choice: string) => {
    const computerChoice = getComputerChoice();
    setUserChoice(choice);
    const gameResult = handleResult(choice, computerChoice);
    setResult(gameResult);
  };

  const handleResult = (user: string, computer: string) => {
    if (user === computer) {
      return "DRAW!";
    }
    if (
      (user === "rock" && computer === "scissor") ||
      (user === "paper" && computer === "rock") ||
      (user === "scissor" && computer === "paper")
    ) {
      setUserScore(userScore + 1);
      return "YOU WIN!";
    }
    setComputerScore(computerScore + 1);
    return "YOU LOSE!";
  };

  const handleRestart = () => {
    setUserChoice("YOU");
    setComputerChoice("CPU");
    setResult("");
    setUserScore(0);
    setComputerScore(0);
  };

  const data = {
    userChoice,
    computerChoice,
    result,
    handlePlay,
    handleRestart,
    userScore,
    computerScore,
  };

  return <GameContext.Provider value={data}>{children}</GameContext.Provider>;
};
