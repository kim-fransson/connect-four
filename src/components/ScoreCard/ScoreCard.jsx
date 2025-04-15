import { AnimatedPlayer } from "../AnimatedPlayer/AnimatedPlayer";
import "./ScoreCard.css";

export const ScoreCard = ({ label, score, color, follow = false }) => {
  return (
    <div className="score-card">
      <span className={`score-card__label score-card__label-${color}`}>
        {label}
      </span>
      <span className={`score-card__score score-card__score-${color}`}>
        {score}
      </span>
      <AnimatedPlayer
        className={`score-card__player score-card__player-${color}`}
        color={color}
        follow={follow}
      />
    </div>
  );
};
