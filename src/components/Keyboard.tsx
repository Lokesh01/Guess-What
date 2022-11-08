import React from "react";
import styles from "./keyboard.module.css";

const keys = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type keyBoardProps = {
  activeLetters: string[];
  inActiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled?: boolean;
};

const Keyboard = ({
  activeLetters,
  inActiveLetters,
  addGuessedLetter,
  disabled = false,
}: keyBoardProps) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(75px,1fr))",
        gap: "0.5rem",
      }}
    >
      {keys.map((key) => {
        const active = activeLetters.includes(key);
        const inActive = inActiveLetters.includes(key);
        return (
          <button
            className={`${styles.btn} ${active ? styles.active : ""} ${
              inActive ? styles.inactive : ""
            }`}
            disabled={active || inActive || disabled}
            key={key}
            onClick={() => addGuessedLetter(key)}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
