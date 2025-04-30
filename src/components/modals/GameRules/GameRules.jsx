import { BaseButton } from "../../buttons";
import { Check } from "lucide-react";
import { BaseModal } from "../BaseModal/BaseModal";

import "./GameRules.css";
import { useState } from "react";

export const GameRules = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <BaseButton
        onPress={() => setIsModalOpen(true)}
        color="white"
        variant="primary"
        textAlign="left"
      >
        game rules
      </BaseButton>
      <BaseModal
        isOpen={isModalOpen}
        onOpenChange={setIsModalOpen}
        heading="rules"
        color="white"
      >
        <h3>objective</h3>
        <p>
          Be the first player to connect 4 of the same colored discs in a row
          (either vertically, horizontally, or diagonally).
        </p>

        <h3>how to play</h3>
        <ol>
          <li>Red goes first in the first game.</li>
          <li>
            Players must alternate turns, and only one disc can be dropped in
            each turn.
          </li>
          <li>The game ends when there is a 4-in-a-row or a stalemate.</li>
          <li>
            The starter of the previous game goes second on the next game.
          </li>
        </ol>
        <BaseButton
          className="game-rules__close-btn"
          onPress={() => setIsModalOpen(false)}
          variant="icon"
        >
          <Check />
        </BaseButton>
      </BaseModal>
    </>
  );
};
