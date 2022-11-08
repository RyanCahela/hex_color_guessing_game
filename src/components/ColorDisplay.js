import React from "react";

const resultStyles = {
  backgroundColor: "#333",
  fontSize: "2rem",
  fontFamily: "sans-serif",
  paddingBlock: "1em",
  paddingInline: "0.5em",
  textAlign: "center",
};

const debugStyles = {
  backgroundColor: "#333",
  color: "#fff",
  fontSize: "1.5rem",
};

const ColorDisplay = ({ backgroundColor, isUserWinner, userGuess }) => {
  return (
    <div
      className="color-display"
      style={{
        backgroundColor: backgroundColor,
        width: "300px",
        height: "300px",
      }}>
      <p style={debugStyles}>{backgroundColor}</p>
      {userGuess && (
        <div
          style={{
            ...resultStyles,
            color: isUserWinner ? "#4CAF50" : "#F44336",
          }}>
          {isUserWinner ? "You Win!" : "You Lose!"}
        </div>
      )}
    </div>
  );
};

export default ColorDisplay;
