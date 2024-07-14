import React from "react";
import "../css/HangmanDisplay.css";

interface HangmanDisplayProps {
  word: string;
  guessedLetters: string[];
}

const HangmanDisplay: React.FC<HangmanDisplayProps> = ({
  word,
  guessedLetters,
}) => {
  const displayWord = word.split("").map((letter, index) => {
    if (letter === " ") {
      return (
        <span key={index} className="space">
          &nbsp;
        </span>
      );
    }
    return guessedLetters.includes(letter) ? (
      <span key={index} className="letters">
        {letter}
      </span>
    ) : (
      <span key={index} className="blank">
        &nbsp;
      </span>
    );
  });

  return <div className="hangman-display">{displayWord}</div>;
};

export default HangmanDisplay;
