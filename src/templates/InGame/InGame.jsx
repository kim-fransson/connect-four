import {
  AnimatedBackgroundBlob,
  Board,
  GameCard,
  InGameMenu,
  Restart,
  ScoreCard,
  Timer,
} from "../../components";
import logo from "../../assets/images/logo.svg";

import "./InGame.css";
import { useMedia } from "react-use";

const playerAnimations = (
  isGameActive,
  isGameOver,
  currentPlayer,
  winner,
  isMouse
) => {
  if (isGameOver) {
    return {
      redAnimation: winner === "red" ? "win" : "lose",
      yellowAnimation: winner === "yellow" ? "win" : "lose",
    };
  }

  if (isGameActive && isMouse) {
    return {
      redAnimation: currentPlayer === "red" ? "follow" : "idle",
      yellowAnimation: currentPlayer === "yellow" ? "follow" : "idle",
    };
  }

  return { redAnimation: "idle", yellowAnimation: "idle" };
};

export const InGame = ({
  board = [],
  playerRed,
  playerYellow,
  currentPlayer,
  winner,
  isGameActive,
  isGameOver,
  onTimerEnd,
  onColumnClick,
  onPlayAgain,
  onStartGame,
  onRestart,
  onPause,
  onContinue,
  onQuit,
  isTimerPaused,
}) => {
  const { score: redScore } = playerRed;
  const { score: yellowScore, isCpu } = playerYellow;

  const playerToLabels = {
    red: isCpu ? "you" : "player 1",
    yellow: isCpu ? "cpu" : "player 2",
  };

  const isMouse = useMedia("(pointer: fine)");

  const { redAnimation, yellowAnimation } = playerAnimations(
    isGameActive,
    isGameOver,
    currentPlayer,
    winner,
    isMouse
  );

  return (
    <div className="in-game">
      <AnimatedBackgroundBlob
        color="purple"
        animation={winner ? "hide" : "show"}
      />
      <AnimatedBackgroundBlob
        color="red"
        animation={winner === "red" ? "show" : "hide"}
      />
      <AnimatedBackgroundBlob
        color="yellow"
        animation={winner === "yellow" ? "show" : "hide"}
      />
      <div className="in-game__grid">
        <h2 className="sr-only">In game</h2>
        <header className="in-game__header">
          <InGameMenu
            onOpen={onPause}
            onClose={onContinue}
            onQuit={onQuit}
            className="in-game__menu-btn"
          />
          <img className="in-game__logo" src={logo} alt="" />
          <Restart
            onOpen={onPause}
            onClose={onContinue}
            onRestart={onRestart}
            btnVariant="subtle"
            className="in-game__restart-btn"
            isDisabled={isGameOver}
          />
        </header>
        <ScoreCard
          color="red"
          label={playerToLabels["red"]}
          score={redScore}
          animation={redAnimation}
          className="in-game__score-card-red"
        />
        <ScoreCard
          color="yellow"
          label={playerToLabels["yellow"]}
          score={yellowScore}
          animation={yellowAnimation}
          className="in-game__score-card-yellow"
        />
        <main className="in-game__main">
          <Board
            board={board}
            onColumnClick={onColumnClick}
            currentPlayer={isGameActive ? currentPlayer : ""}
            isDisabled={!isGameActive}
          />
          {isGameActive ? (
            <Timer
              label={`${playerToLabels[currentPlayer]}’s turn`}
              color={currentPlayer}
              from={30}
              onTimerEnd={onTimerEnd}
              className="in-game__timer"
              isPaused={isTimerPaused}
            />
          ) : isGameOver ? (
            <GameCard
              label={playerToLabels[winner]}
              text={winner ? (isCpu ? "win" : "wins") : "draw"}
              buttonLabel="play again"
              className="in-game__game-card"
              onButtonPress={onPlayAgain}
            />
          ) : (
            <GameCard
              label={playerToLabels[currentPlayer]}
              text="ready?"
              buttonLabel="start"
              className="in-game__game-card"
              onButtonPress={onStartGame}
            />
          )}
        </main>
      </div>
    </div>
  );
};
