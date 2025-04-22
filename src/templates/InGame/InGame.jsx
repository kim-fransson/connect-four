import {
  AnimatedBackgroundBlob,
  Board,
  GameCard,
  InGameMenu,
  Restart,
  ScoreCard,
} from "../../components";
import logo from "../../assets/images/logo.svg";

import "./InGame.css";

export const InGame = ({ board = [], playerRed, playerYellow }) => {
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
          <InGameMenu />
          <img className="in-game__logo" src={logo} alt="" />
          <Restart btnVariant="subtle" />
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
            <Board board={board} />
            <GameCard
              label="player 1"
              text="ready?"
              buttonLabel="start"
              className="in-game__game-card"
            />
          </div>
        </main>
      </div>
    </div>
  );
};
