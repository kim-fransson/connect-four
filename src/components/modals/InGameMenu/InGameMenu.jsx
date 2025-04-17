import { BaseButton } from "../../buttons";
import { Restart } from "../Restart/Restart";
import { BaseModal } from "../BaseModal/BaseModal";
import "./InGameMenu.css";

export const InGameMenu = () => {
  return (
    <BaseModal
      trigger={<BaseButton variant="subtle">menu</BaseButton>}
      heading="pause"
      color="purple"
    >
      <div className="in-game-menu__button-group">
        <BaseButton slot="close" color="white" variant="primary">
          continue game
        </BaseButton>
        <Restart />
        <BaseButton color="pink" variant="primary">
          quit game
        </BaseButton>
      </div>
    </BaseModal>
  );
};
