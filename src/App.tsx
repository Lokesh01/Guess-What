import { useCallback, useEffect, useState } from "react";
import words from "./wordList.json";
import "./App.css";
import HangmanImage from "./components/HangmanImage";
import HangmanWords from "./components/HangmanWords";
import Keyboard from "./components/Keyboard";

function getWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function App() {
  const [WordToGuess, setWordToGuess] = useState(getWord);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  //no. of incorrect letters pressed
  const incorrectLetters = guessedLetters.filter(
    (letter) => !WordToGuess.includes(letter)
  );

  //looser or winner
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = WordToGuess.split("").every((letter) =>
    guessedLetters.includes(letter)
  );

  //for adding pressed letter to guessed letter
  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isWinner || isLoser) {
        if (!isWinner && !isLoser) alert("already tried this key!");

        return;
      }

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isWinner, isLoser]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (key !== "Enter") return;

      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  return (
    <div className="App">
      <div className="main_heading">
        <h1>Guess What ?</h1>
        {isWinner && "You Won! : Refresh to try again "}
        {isLoser && `Sorry You Lost! : Refresh to try again `}
      </div>

      <HangmanImage noOfLives={incorrectLetters.length} />

      <HangmanWords
        wordToGuess={WordToGuess}
        guessedLetters={guessedLetters}
        isReveal={isLoser}
      />

      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          activeLetters={guessedLetters.filter((letter) =>
            WordToGuess.includes(letter)
          )}
          inActiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
          disabled={isWinner || isLoser}
        />
      </div>
    </div>
  );
}

export default App;
