import React from "react";

const GuessInput = ({ answers, handleGuessClick }) => {
  const handleClick = (e) => {
    console.log("e.target", e.target.value);
    handleGuessClick(e.target.value);
  };

  return (
    <div className="guess-input">
      {answers.map((answer) => (
        <button value={answer} key={answer} onClick={handleClick}>
          {answer}
        </button>
      ))}
    </div>
  );
};

export default GuessInput;
