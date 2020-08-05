import React from "react";
import Rock from "./icons/Rock";
import Paper from "./icons/Paper";
import Scissors from "./icons/Scissors";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

const choices = [
  { id: 1, name: "rock", component: Rock, lossesTo: 2 },
  { id: 2, name: "paper", component: Paper, lossesTo: 3 },
  { id: 3, name: "scissors", component: Scissors, lossesTo: 1 },
];

//1. handle wins + losses
//2. determine the winner based on choices
//3. reset the game

export default function App() {
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [gameState, setGameState] = useState(null); // win, lose, draw

  useEffect(() => {
    retstartGame();
  }, []);

  function retstartGame() {
    setGameState(null);
    setUserChoice(null);
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  }
  function handleUserChoice(choice) {
    const chosenChoice = choices.find((c) => c.id === choice);
    setUserChoice(chosenChoice);

    //determine the winner
    setGameState("win");
    if (chosenChoice.lossesTo === computerChoice.id) {
      setLosses((losses) => losses + 1);
      setGameState("lose");
    } else if (computerChoice.lossesTo === chosenChoice.id) {
      setWins((wins) => wins + 1);
      setGameState("win");
    } else if (computerChoice.id === chosenChoice.id) {
      setGameState("draw");
    }
  }

  function renderComponent(choice) {
    const Component = choice.component;
    return <Component />;
  }

  return (
    <div className="app">
      {/* information goes here */}
      <div className="info">
        <h2>Rock. Paper. Scissors</h2>

        {/* wins vs losses stats */}
        <div className="wins-losses">
          <div className="wins">
            <span className="number">{wins}</span>
            <span className="text">{wins === 1 ? "Win" : "Wins"}</span>
          </div>

          <div className="losses">
            <span className="number">{losses}</span>
            <span className="text">{losses === 1 ? "Loss" : "Losses"}</span>
          </div>
        </div>
      </div>

      {/* the popup to show win/loss/draw */}
      {gameState && (
        <div
          className={`game-state ${gameState}`}
          onClick={() => retstartGame()}
        >
          <div>
            <div className="game-state-content">
              <p>{renderComponent(userChoice)}</p>
              {/* <p>you {gameState}!</p> */}
              {gameState === "win" && <p>Congrats! You won!</p>}
              {gameState === "lose" && <p>Sorry! You lost!</p>}
              {gameState === "draw" && <p>You drew!</p>}
              <p>{renderComponent(computerChoice)}</p>
            </div>

            <button onClick={() => retstartGame()}>play Again</button>
          </div>
        </div>
      )}
      <div className="choices">
        {/* choices captions */}
        <div>You</div>
        <div />
        <div>Computer</div>

        {/* buttons for my choice */}
        <div>
          <button className="rock" onClick={() => handleUserChoice(1)}>
            <Rock />
          </button>
          <button className="paper" onClick={() => handleUserChoice(2)}>
            <Paper />
          </button>
          <button className="scissors" onClick={() => handleUserChoice(3)}>
            <Scissors />
          </button>
        </div>

        <div className="vs">vs</div>

        {/* show the computer's choice */}
        <div>
          <button className="computer-choice">?</button>
        </div>
      </div>
    </div>
  );
}
