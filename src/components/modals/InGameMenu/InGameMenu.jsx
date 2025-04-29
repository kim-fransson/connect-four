import { BaseButton } from "../../buttons";
import { BaseModal } from "../BaseModal/BaseModal";
import "./InGameMenu.css";

export const InGameMenu = ({ onQuit, onOpen, onClose, className }) => {
  return (
    <BaseModal
      trigger={
        <BaseButton className={className} variant="subtle">
          menu
        </BaseButton>
      }
      heading="pause"
      color="purple"
      onOpen={onOpen}
      onClose={onClose}
    >
      <div className="in-game-menu__button-group">
        <BaseButton slot="close" color="white" variant="primary">
          continue game
        </BaseButton>
        <BaseButton slot="close" onPress={onQuit} color="red" variant="primary">
          quit game
        </BaseButton>
      </div>
    </BaseModal>
  );
};
