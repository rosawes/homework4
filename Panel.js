import React from "react";

function Panel({ currentRound, onRestart, imageOptions }) {
  return (
    <div className="panel">
      <h2 className="title">The Web Dev Memory Game</h2>
      <div id="currentRound">Round: {currentRound}</div>
      {imageOptions.map((imageObj, index) => (
        <button onClick={imageObj.onClick}>{imageObj.text}</button>
      ))}
      <button onClick={onRestart} id="persistentBtn">
        Play Again
      </button>
    </div>
  );
}

export default Panel;
