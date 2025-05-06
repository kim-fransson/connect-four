import { StartMenu } from "../../components";

import "./MainMenu.css";

export const MainMenu = ({ onPlayerVsPlayer, onPlayerVsCPU }) => {
  return (
    <main className="main-menu">
      <h2 className="sr-only">Main menu</h2>
      <StartMenu
        onPlayerVsPlayer={onPlayerVsPlayer}
        onPlayerVsCPU={onPlayerVsCPU}
      />
    </main>
  );
};
