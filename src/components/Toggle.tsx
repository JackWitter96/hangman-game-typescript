import React from "react";
import "../css/Toggle.css";
import Menu from "./Menu";

interface ToggleProps {
  onContinue: () => void;
  newCategory: () => void;
  quitGame: () => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({
  onContinue,
  newCategory,
  quitGame,
  menuOpen,
  setMenuOpen,
}) => {
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {!menuOpen && (
        <button className="toggle-button" onClick={toggleMenu}>
          <div className="toggle-lines">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </button>
      )}
      {menuOpen && (
        <Menu
          onContinue={onContinue}
          newCategory={newCategory}
          quitGame={quitGame}
          setMenuOpen={setMenuOpen}
        />
      )}
    </div>
  );
};

export default Toggle;