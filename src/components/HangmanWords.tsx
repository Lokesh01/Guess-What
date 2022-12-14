import React, { useState } from "react";

type hangManwordProps = {
  wordToGuess: string;
  guessedLetters: string[];
  isReveal?: false;
};

const HangmanWords = ({
  wordToGuess,
  guessedLetters,
  isReveal,
}: hangManwordProps) => {
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {wordToGuess.split("").map((letter, idx) => (
        <span style={{ borderBottom: ".1em solid black" }} key={idx}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || isReveal
                  ? "visible"
                  : "hidden",
              color: !guessedLetters.includes(letter) ? "red" : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWords;
