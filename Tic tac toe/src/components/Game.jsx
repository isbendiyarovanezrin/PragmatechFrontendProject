import React, { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [board, setBoard] = useState(Array(16).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2, 3],
      [4, 5, 6, 7],
      [8, 9, 10, 11],
      [12, 13, 14, 15],
      [0, 4, 8, 12],
      [1, 5, 9, 13],
      [2, 6, 10, 14],
      [3, 7, 11, 15],
      [0, 5, 10, 15],
      [3, 6, 9, 12],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c, d] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c] &&
        squares[a] === squares[d]
      ) {
        return squares[a];
      }
    }

    if (squares.includes(null) === false) {
      return "Bərabərə!";
    }

    return null;
  }

  const handleClick = (i) => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    return (
      <button
        className="reset-btn"
        onClick={() => setBoard(Array(16).fill(null))}
      >
        Yenidən başlat
      </button>
    );
  };

  return (
    <>
      <Board squares={board} onClick={handleClick} />

      <div className="winner">
        <p>
          {winner
            ? "Qalib: " + winner
            : "Növbəti oyunçu: " + (xIsNext ? "X" : "O")}
        </p>

        {resetGame()}
      </div>
    </>
  );
};

export default Game;
