import { useState } from "react";
import { MainMenu } from "./templates";
import { InGame } from "./pages";

import "./App.css";

function App() {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <>
      <h1 className="sr-only">Connect four</h1>
      {showMenu ? (
        <MainMenu onPlayerVsPlayer={() => setShowMenu(false)} />
      ) : (
        <InGame onQuitGame={() => setShowMenu(true)} />
      )}
    </>
  );
}

export default App;
