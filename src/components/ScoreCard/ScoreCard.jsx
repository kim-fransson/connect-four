import { useRef } from "react";
import player1 from "../../assets/images/player-one.svg";
import player2 from "../../assets/images/player-two.svg";

import "./ScoreCard.css";
import { useMouse } from "react-use";
import { angle } from "../../utils";

const colorToPlayer = {
  red: player1,
  yellow: player2,
};

export const ScoreCard = ({ label, score, color, follow = false }) => {
  const ref = useRef(null);
  const { docX, docY, posX, posY, elW, elH } = useMouse(ref);
  const anchorX = posX + elW / 2;
  const anchorY = posY + elH / 2;
  let rotation = angle(docX, docY, anchorX, anchorY);

  let scaleY = 1;

  if (color === "yellow") {
    scaleY = rotation < -90 || rotation > 90 ? -1 : 1;
  } else if (rotation !== 0) {
    rotation += 180;
    scaleY = rotation < 270 && rotation > 90 ? -1 : 1;
  }

  return (
    <div className="score-card">
      <span className="heading-xs">{label}</span>
      <span className="score-card__score">{score}</span>
      <div
        ref={ref}
        className={`score-card__player score-card__player-${color}`}
      >
        <img
          src={colorToPlayer[color]}
          alt=""
          style={{
            rotate: follow && `${rotation}deg`,
            scale: follow && `1 ${scaleY}`,
          }}
        />
      </div>
    </div>
  );
};
