import React, { useState, useEffect, useLayoutEffect } from "react";
import "./App.css";
import ColorDisplay from "./components/ColorDisplay";
import GuessInput from "./components/GuessInput";
import RandomHex from "random-hex-code-gen";

function App() {
  const [userGuess, setUserGuess] = useState(null); //string
  const [answers, setAnswers] = useState([]); //array
  const [correctAnswer, setCorrectAnswer] = useState(null); //string
  const [isUserWinner, setIsUserWinner] = useState(null); //bool

  const generateNewQuestion = () => {
    const numberOfAnswers = 3;
    let answers = new Array(numberOfAnswers)
      .fill("")
      .map(() => RandomHex.generate());
    setAnswers(answers);
    setCorrectAnswer(answers[Math.floor(Math.random() * answers.length)]);
  };

  const handleGuessClick = (buttonValue) => {
    setUserGuess(buttonValue);
  };

  useEffect(() => {
    if (userGuess === null) return;
    if (correctAnswer === null) return;

    if (userGuess === correctAnswer) {
      setIsUserWinner(true);
    } else {
      setIsUserWinner(false);
    }
  }, [userGuess, correctAnswer]);

  useEffect(generateNewQuestion, []);

  useEffect(() => {
    if (isUserWinner === null) return;
    let timeoutId = setTimeout(() => {
      setUserGuess(null);
      setIsUserWinner(null);
      setCorrectAnswer(null);
      generateNewQuestion();
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [isUserWinner]);

  return (
    <div className="App">
      <ColorDisplay
        backgroundColor={correctAnswer}
        isUserWinner={isUserWinner}
        userGuess={userGuess}
      />
      <GuessInput answers={answers} handleGuessClick={handleGuessClick} />
    </div>
  );
}

export default App;
