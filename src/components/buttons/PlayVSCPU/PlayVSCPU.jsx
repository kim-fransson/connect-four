import { BaseButton } from "../BaseButton/BaseButton";
import icon from "../../../assets/images/player-vs-cpu.svg";
export const PlayVSCPU = () => {
  return (
    <BaseButton variant="primary" color="red">
      play vs cpu
      <img src={icon} alt="" />
    </BaseButton>
  );
};
