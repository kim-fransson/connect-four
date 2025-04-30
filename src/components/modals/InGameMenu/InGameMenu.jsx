import { useState } from "react";
import { BaseButton } from "../../buttons";
import { BaseModal } from "../BaseModal/BaseModal";
import "./InGameMenu.css";

export const InGameMenu = ({ onQuit, onOpen, onClose, className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOnOpenChange = (isOpen) => {
    if (isOpen) {
      setIsModalOpen(true);
      onOpen();
    } else {
      setIsModalOpen(false);
      onClose();
    }
  };

  return (
    <>
      <BaseButton
        onPress={() => setIsModalOpen(true)}
        className={className}
        variant="subtle"
      >
        menu
      </BaseButton>
      <BaseModal
        isOpen={isModalOpen}
        heading="pause"
        color="purple"
        onOpenChange={handleOnOpenChange}
      >
        <div className="in-game-menu__button-group">
          <BaseButton slot="close" color="white" variant="primary">
            continue game
          </BaseButton>
          <BaseButton
            slot="close"
            onPress={onQuit}
            color="red"
            variant="primary"
          >
            quit game
          </BaseButton>
        </div>
      </BaseModal>
    </>
  );
};
