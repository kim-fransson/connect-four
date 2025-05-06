import { BaseButton } from "../BaseButton/BaseButton";
import icon from "../../../assets/images/player-vs-cpu.svg";
export const PlayVSCPU = ({ onPress }) => {
  return (
    <BaseButton
      onPress={onPress}
      textAlign="left"
      variant="primary"
      color="red"
    >
      play vs cpu
      <img src={icon} alt="" />
    </BaseButton>
  );
};
