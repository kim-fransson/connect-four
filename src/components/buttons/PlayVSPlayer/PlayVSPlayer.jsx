import { BaseButton } from "../BaseButton/BaseButton";
import icon from "../../../assets/images/player-vs-player.svg";
export const PlayVSPlayer = () => {
  return (
    <BaseButton variant="primary" color="yellow">
      play vs player
      <img src={icon} alt="" />
    </BaseButton>
  );
};
