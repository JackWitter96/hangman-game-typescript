import React from "react";
import "../css/Keyboard.css";

interface KeyboardProps {
  guessedLetters: String[];
  handleGuess: (letter: string) => void;
}

const Keyboard: React.FC<KeyboardProps> = ({ guessedLetters, handleGuess }) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <div className="keyboard">
      {alphabet.map((letter) => (
        <button
          key={letter}
          onClick={() => handleGuess(letter)}
          disabled={guessedLetters.includes(letter)}
          className="keyboard-buttons"
          style={{ opacity: guessedLetters.includes(letter) ? 0.5 : 1 }}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
