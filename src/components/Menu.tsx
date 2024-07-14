import React from "react";
import "../css/Menu.css";

interface MenuProps {
  onContinue: () => void;
  newCategory: () => void;
  quitGame: () => void;
  setMenuOpen: (open: boolean) => void;
}

const Menu: React.FC<MenuProps> = ({
  onContinue,
  newCategory,
  quitGame,
  setMenuOpen,
}) => {
  const handleCloseMenu = (closeMenu: () => void) => {
    closeMenu();
    setMenuOpen(false);
  };

  return (
    <div className="menu-container">
      <div className="menu">
        <button onClick={() => handleCloseMenu(onContinue)}>Continue</button>
        <button onClick={() => handleCloseMenu(newCategory)}>
          New Category
        </button>
        <button onClick={() => handleCloseMenu(quitGame)}>Quit Game</button>
      </div>
    </div>
  );
};

export default Menu;
