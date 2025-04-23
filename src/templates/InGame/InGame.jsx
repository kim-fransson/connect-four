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
  const {
    label: redLabel,
    score: redScore,
    animation: redAnimation,
  } = playerRed;
  const {
    label: yellowLabel,
    score: yellowScore,
    animation: yellowAnimation,
  } = playerYellow;

  return (
    <div className="in-game">
      <AnimatedBackgroundBlob color="purple" animation="show" />
      <div className="in-game__wrapper">
        <h2 className="sr-only">In game</h2>
        <header className="in-game__header">
          <InGameMenu
            onOpen={onPause}
            onClose={onContinue}
            onRestart={onRestart}
            onQuit={onQuit}
          />
          <img className="in-game__logo" src={logo} alt="" />
          <Restart
            onOpen={onPause}
            onClose={onContinue}
            onRestart={onRestart}
            btnVariant="subtle"
          />
        </header>
        <main className="in-game__main">
          <ScoreCard
            color="red"
            label={redLabel}
            score={redScore}
            animation={redAnimation}
          />
          <ScoreCard
            color="yellow"
            label={yellowLabel}
            score={yellowScore}
            animation={yellowAnimation}
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
                text="wins"
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
