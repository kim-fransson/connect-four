import { useState } from "react";
import { BaseButton } from "../../buttons";
import { BaseModal } from "../BaseModal/BaseModal";
import "./Restart.css";

export const Restart = ({
  btnVariant = "primary",
  btnColor = "white",
  onClose = () => {},
  onOpen = () => {},
  onRestart,
  className,
  isDisabled = false,
}) => {
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
        isDisabled={isDisabled}
        className={className}
        variant={btnVariant}
        color={btnColor}
      >
        restart
      </BaseButton>
      <BaseModal
        isOpen={isModalOpen}
        onOpenChange={handleOnOpenChange}
        heading="Are you sure?"
        color="purple"
      >
        <div className="restart__button-group">
          <BaseButton slot="close" color="white" variant="primary">
            never mind
          </BaseButton>
          <BaseButton
            slot="close"
            onPress={onRestart}
            color="red"
            variant="primary"
          >
            restart
          </BaseButton>
        </div>
      </BaseModal>
    </>
  );
};
