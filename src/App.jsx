import { useState } from "react";
import { MainMenu } from "./templates";
import { InGame } from "./pages";

import "./App.css";

function App() {
  const [showMenu, setShowMenu] = useState(true);
  const [playingAgainstCPU, setPlayingAgainstCPU] = useState(false);

  const handlePlayerVsPlayer = () => {
    setShowMenu(false);
    setPlayingAgainstCPU(false);
  };

  const handlePlayerVsCPU = () => {
    setShowMenu(false);
    setPlayingAgainstCPU(true);
  };

  return (
    <>
      <h1 className="sr-only">Connect four</h1>
      {showMenu ? (
        <MainMenu
          onPlayerVsPlayer={handlePlayerVsPlayer}
          onPlayerVsCPU={handlePlayerVsCPU}
        />
      ) : (
        <InGame
          onQuitGame={() => setShowMenu(true)}
          playingAgainstCPU={playingAgainstCPU}
        />
      )}
    </>
  );
}

export default App;
