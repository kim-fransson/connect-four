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

const playerToLabels = {
  red: "player 1",
  yellow: "player 2",
};

const playerAnimations = (isGameActive, isGameOver, currentPlayer, winner) => {
  if (isGameOver) {
    return {
      redAnimation: winner === "red" ? "win" : "lose",
      yellowAnimation: winner === "yellow" ? "win" : "lose",
    };
  }

  if (isGameActive) {
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
}) => {
  const { label: redLabel, score: redScore } = playerRed;
  const { label: yellowLabel, score: yellowScore } = playerYellow;

  const { redAnimation, yellowAnimation } = playerAnimations(
    isGameActive,
    isGameOver,
    currentPlayer,
    winner
  );

  return (
    <div className="in-game">
      <AnimatedBackgroundBlob color={winner || "purple"} animation="show" />
      <div className="in-game__wrapper">
        <h2 className="sr-only">In game</h2>
        <header className="in-game__header">
          <InGameMenu
            onOpen={onPause}
            onClose={onContinue}
            onRestart={onRestart}
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
          />
        </header>
        <main className="in-game__main">
          <ScoreCard
            color="red"
            label={redLabel}
            score={redScore}
            animation={redAnimation}
            className="in-game__score-card-red"
          />
          <ScoreCard
            color="yellow"
            label={yellowLabel}
            score={yellowScore}
            animation={yellowAnimation}
            className="in-game__score-card-yellow"
          />
          <div className="in-game__board">
            <Board
              board={board}
              onColumnClick={onColumnClick}
              currentPlayer={isGameActive ? currentPlayer : ""}
            />
            {isGameActive ? (
              <Timer
                label={`${playerToLabels[currentPlayer]}’s turn`}
                color={currentPlayer}
                from={30}
                onTimerEnd={onTimerEnd}
                className="in-game__timer"
              />
            ) : isGameOver ? (
              <GameCard
                label={playerToLabels[winner]}
                text={winner ? "wins" : "draw"}
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
          </div>
        </main>
      </div>
    </div>
  );
};
