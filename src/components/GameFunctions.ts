import { useState, useEffect } from 'react';
import Words from './Words';

export function useGameLogic() {
  const [page, setPage] = useState<string>('home');
  const [category, setCategory] = useState<string>('');
  const [word, setWord] = useState<string>('');
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [health, setHealth] = useState<number>(100);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [lostWord, setLostWord] = useState<string>('');
  const [hasWon, setHasWon] = useState<boolean>(false);

  const selectCategory = (category: string) => {
    setCategory(category);
    const words = Words[category];
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWord(randomWord.replace(/_/g, ' '));
    setGuessedLetters([]);
    setHealth(100);
    setPage('game');
  };

  const handleGuess = (letter: string) => {
    if (guessedLetters.includes(letter) || gameOver || hasWon) return;
    setGuessedLetters([...guessedLetters, letter]);

    if (!word.includes(letter)) {
      setHealth(health - 100 / 6);
      if (health - 100 / 6 <= 0) {
        setGameOver(true);
        setLostWord(word);
      }
    }
  };

  useEffect(() => {
    if (
      word &&
      word.split('').every((letter) => letter === ' ' || guessedLetters.includes(letter))
    ) {
      setHasWon(true);
    }
  }, [guessedLetters, word]);

  const goToHome = () => {
    setPage('home');
    setMenuOpen(false);
    setGameOver(false);
    setHasWon(false);
  };

  const changeCategory = () => {
    setPage('category');
    setMenuOpen(false);
    setGameOver(false);
    setHasWon(false);
  };

  const continueGame = () => {
    setMenuOpen(false);
  };

  const quitGame = () => {
    setPage('home');
    setMenuOpen(false);
    setGameOver(false);
    setHasWon(false);
  };

  const playAgain = () => {
    setWord('');
    setGuessedLetters([]);
    setHealth(100);
    setGameOver(false);
    setHasWon(false);
    setPage('category');
  };

  return {
    page,
    category,
    word,
    guessedLetters,
    health,
    menuOpen,
    setMenuOpen,
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
    setPage
  };
}
