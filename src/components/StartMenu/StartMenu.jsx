import { PlayVSPlayer } from "../buttons";
import { GameRules } from "../modals";
import logo from "../../assets/images/logo.svg";

import "./StartMenu.css";

export const StartMenu = () => {
  return (
    <div className="start-menu">
      <img src={logo} alt="" />
      <div className="start-menu__button-group">
        <PlayVSPlayer />
        <GameRules />
      </div>
    </div>
  );
};
