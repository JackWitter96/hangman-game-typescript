import React from 'react';
import { useGameLogic } from './components/GameFunctions';

import {
  CategorySelection,
  HangmanDisplay,
  HealthBar,
  Keyboard,
  Toggle,
  logo,
  playButton,
  backButton,
} from './components/Imports';

const App: React.FC = () => {
  const {
    page,
    category,
    word,
    guessedLetters,
    health,
    menuOpen,
    gameOver,
    lostWord,
    hasWon,
    selectCategory,
    handleGuess,
    goToHome,
    changeCategory,
    continueGame,
    quitGame,
    playAgain,
    setMenuOpen,
    setPage
  } = useGameLogic();

  return (
    <div className="container">
      {page === 'home' ? (
        <div className="homepage-container">
          <div className="homepage">
            <img className="homepage-logo" src={logo} alt="" />
            <button className="homepage-button" onClick={() => setPage('category')}>
              <img src={playButton} alt="Play Button" />
            </button>
          </div>
        </div>
      ) : page === 'category' ? (
        <div className="category-container">
          <div className="category-header">
            <button className="category-buttons" onClick={goToHome}>
              <img className="category-back-button" src={backButton} alt="Back Button" />
            </button>
            <h1>Select Category</h1>
          </div>
          <CategorySelection selectCategory={selectCategory} />
        </div>
      ) : (
        <div className="in-game-container">
          {gameOver && (
            <div className="popup-container">
              <div className="popup">
                <h2>You've Lost!</h2>
                <p>Incorrect word: {lostWord}</p>
                <div className="popup-buttons">
                  <button onClick={playAgain}>Play Again</button>
                  <button onClick={quitGame}>Quit Game</button>
                </div>
              </div>
            </div>
          )}
          {hasWon && (
            <div className="popup-container">
              <div className="popup">
                <h2>You've Won!</h2>
                <p>Correct word: {word}</p>
                <div className="popup-buttons">
                  <button onClick={playAgain}>Play Again</button>
                  <button onClick={quitGame}>Quit Game</button>
                </div>
              </div>
            </div>
          )}
          <div className="in-game-buttons-and-health">
            <div className="in-game-header">
              <Toggle
                onContinue={continueGame}
                newCategory={changeCategory}
                quitGame={quitGame}
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
              />
              <div className="category-display">{category}</div>
            </div>
            <HealthBar health={health} />
          </div>
          <div className="hangman-and-keyboard">
            <HangmanDisplay word={word} guessedLetters={guessedLetters} />
            <Keyboard guessedLetters={guessedLetters} handleGuess={handleGuess} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
