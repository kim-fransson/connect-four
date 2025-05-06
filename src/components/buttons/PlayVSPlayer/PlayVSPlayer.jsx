import { BaseButton } from "../BaseButton/BaseButton";
import icon from "../../../assets/images/player-vs-player.svg";

export const PlayVSPlayer = ({ onPress }) => {
  return (
    <BaseButton
      textAlign="left"
      variant="primary"
      color="yellow"
      onPress={onPress}
    >
      play vs player
      <img src={icon} alt="" />
    </BaseButton>
  );
};
