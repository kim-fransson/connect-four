import { PlayVSCPU, PlayVSPlayer } from "../buttons";
import { GameRules } from "../modals";
import logo from "../../assets/images/logo.svg";

import "./StartMenu.css";

export const StartMenu = ({ onPlayerVsPlayer, onPlayerVsCPU }) => {
  return (
    <div className="start-menu">
      <img src={logo} alt="" />
      <div className="start-menu__button-group">
        <PlayVSCPU onPress={onPlayerVsCPU} />
        <PlayVSPlayer onPress={onPlayerVsPlayer} />
        <GameRules />
      </div>
    </div>
  );
};
