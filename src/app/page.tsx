"use client";
import { useCallback, useState } from "react";
import {
  getComputerMove,
  getNewScores,
  Options,
  pointsInitialState,
  totalMoves,
} from "./utils";

export default function Home() {
  const [points, setPoints] = useState(pointsInitialState);
  const [movesLeft, setMovesLeft] = useState(totalMoves);
  const [gameOver, setGameOver] = useState(false);

  const selectOption = useCallback(
    (move: Options) => {
      const computerMove = getComputerMove();
      const score = getNewScores(move, computerMove, points);
      setPoints(score);
      if (score.result === "It's a tie") return;
      setMovesLeft((m) => m - 1);
      if (movesLeft - 1 === 0) {
        setGameOver(true);
      }
    },
    [movesLeft, points]
  );
  const winner = points.computer < points.player ? "You" : "Computer";

  const onRestart = () => {
    setPoints(pointsInitialState);
    setMovesLeft(totalMoves);
    setGameOver(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="text-7xl pb-6">Rock Paper Scissors</div>
      <div className="flex min-h-fit mb-[100px]">
        <div className="text-2xl flex flex-col items-center justify-center me-[100px]">
          <div>Player</div>
          <div>{points.player}</div>
        </div>
        <div className="text-2xl flex flex-col items-center justify-center">
          <div>Computer</div>
          <div>{points.computer}</div>
        </div>
      </div>
      {!gameOver ? (
        <>
          <div className="text-7xl pb-6">Choose your play</div>
          <div className="text-xl pb-6">Moves Left: {movesLeft}</div>
          <div className="text-sm w-[500px] flex justify-center">
            <button
              onClick={() => selectOption("rock")}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Rock
            </button>
            <button
              onClick={() => selectOption("paper")}
              className="mx-[100px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Paper
            </button>
            <button
              onClick={() => selectOption("scissors")}
              className="me-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Scissors
            </button>
          </div>
          <div className="flex justify-center text-3xl mt-14">
            {points.result}
          </div>
        </>
      ) : (
        <>
          <div
            className={
              "text-4xl " +
              (winner === "You" ? " text-green-600" : " text-red-300")
            }
          >
            {winner} won the game!!
          </div>
          <div>Game Over</div>
          <div className="mt-[50px]">
            <button
              onClick={onRestart}
              className="mx-[100px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Restart
            </button>
          </div>

          <div className="hidden text-green-300 text-red-300"></div>
        </>
      )}
    </main>
  );
}
