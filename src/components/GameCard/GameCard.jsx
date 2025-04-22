import clsx from "clsx";
import { BaseButton } from "../buttons";

import "./GameCard.css";

export const GameCard = ({
  label,
  text,
  buttonLabel,
  onButtonPress,
  className,
}) => {
  return (
    <div className={clsx("game-card", className)}>
      <span className="game-card__label">{label}</span>
      <span className="game-card__text">{text}</span>
      <BaseButton variant="subtle" onPress={onButtonPress}>
        {buttonLabel}
      </BaseButton>
    </div>
  );
};
