export const points = {
  "rock-paper": {
    rock: 0,
    paper: 1,
    scissors: 0,
  },
  "rock-scissors": {
    rock: 1,
    paper: 0,
    scissors: 0,
  },
  "paper-scissors": {
    rock: 0,
    paper: 0,
    scissors: 1,
  },
};

export type Options = "rock" | "paper" | "scissors";
export const options: Options[] = ["rock", "paper", "scissors"];

export const getPoints = (player: Options, computer: Options) => {
  if (player === computer) {
    return;
  }
  // @ts-ignore
  let currentPoints = points[`${player}-${computer}`];
  if (currentPoints === undefined) {
    // @ts-ignore
    currentPoints = points[`${computer}-${player}`];
  }

  return currentPoints;
};

export const getNewScores = (
  player: Options,
  computer: Options,
  points: { player: number; computer: number; result: string }
) => {
  if (player === computer) {
    return { ...points, result: "It's a tie" };
  }
  const currentPoints = getPoints(player, computer);
  if (!currentPoints) {
    return { ...points, result: "It's a tie" };
  }
  const isPlayerWon = currentPoints[player] === 1;
  return {
    player: points.player + currentPoints[player],
    computer: points.computer + currentPoints[computer],
    result: `${isPlayerWon ? "Player" : "Computer"} Won`,
  };
};

export const getComputerMove = (): Options => {
  const random = ((Math.random() * 100) % 3).toFixed() as "0" | "1" | "2";
  return options[Number(random)];
};

export const totalMoves = 5;
export const pointsInitialState = { player: 0, computer: 0, result: "" };
