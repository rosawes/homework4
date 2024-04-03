import React from 'react';

function Panel({ currentRound, onRestart }) {
  return (
    <div className="panel">
      <h2 className="title">The Web Dev Memory Game</h2>
      <div id="currentRound">Round: {currentRound}</div>
      <button onClick={onRestart} id="persistentBtn">Play Again</button>
    </div>
  );
}

export default Panel;