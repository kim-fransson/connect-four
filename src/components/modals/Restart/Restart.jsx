import { BaseButton } from "../../buttons";
import { BaseModal } from "../BaseModal/BaseModal";
import "./Restart.css";

export const Restart = ({
  btnVariant = "primary",
  btnColor = "white",
  onClose = () => {},
  onOpen = () => {},
  onRestart,
}) => {
  return (
    <BaseModal
      onOpen={onOpen}
      onClose={onClose}
      trigger={
        <BaseButton variant={btnVariant} color={btnColor}>
          restart
        </BaseButton>
      }
      heading="Are you sure?"
      color="purple"
    >
      <div className="restart__button-group">
        <BaseButton slot="close" color="white" variant="primary">
          never mind
        </BaseButton>
        <BaseButton onPress={onRestart} color="red" variant="primary">
          restart
        </BaseButton>
      </div>
    </BaseModal>
  );
};
