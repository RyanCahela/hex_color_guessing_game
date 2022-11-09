import React from "react";
import styles from "./ColorDisplay.module.css";

const ColorDisplay = ({ backgroundColor, isUserWinner, userGuess }) => {
  return (
    <>
      <p className={styles.debug}>{backgroundColor}</p>
      <div
        className={styles.container}
        style={{
          backgroundColor: backgroundColor,
          width: "300px",
          height: "300px",
        }}>
        <div className={styles.result} data-active={userGuess != null}>
          {userGuess && (
            <div>
              {isUserWinner ? (
                <div className={styles.win}>You Win!</div>
              ) : (
                <div className={styles.lose}>You Lose!</div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ColorDisplay;
