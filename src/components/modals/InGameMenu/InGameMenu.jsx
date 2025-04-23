import { BaseButton } from "../../buttons";
import { Restart } from "../Restart/Restart";
import { BaseModal } from "../BaseModal/BaseModal";
import "./InGameMenu.css";

export const InGameMenu = ({ onRestart, onQuit, onOpen, onClose }) => {
  return (
    <BaseModal
      trigger={<BaseButton variant="subtle">menu</BaseButton>}
      heading="pause"
      color="purple"
      onOpen={onOpen}
      onClose={onClose}
    >
      <div className="in-game-menu__button-group">
        <BaseButton slot="close" color="white" variant="primary">
          continue game
        </BaseButton>
        <Restart onRestart={onRestart} />
        <BaseButton onPress={onQuit} color="red" variant="primary">
          quit game
        </BaseButton>
      </div>
    </BaseModal>
  );
};
